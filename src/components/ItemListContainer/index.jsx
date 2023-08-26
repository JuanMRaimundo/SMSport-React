import { useEffect, useState } from "react";

//MOCKS
import { products } from "../../mocks/data.js";
//COMPONENTS
import Card from "../Card/index.jsx";
import { Grid, LinearProgress, Container } from "@mui/material";
//STYLES
import "./styles.css";

function ItemListContainer() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		const result = new Promise((resolve) =>
			setTimeout(() => resolve(products), 2000)
		);
		result
			.then((data) => setProductos(data))
			.catch((error) => console.log(error));
		console.log(productos);
	}, [productos]);

	return (
		<Grid className="list">
			{productos.length > 0 ? (
				productos.map((prod) => (
					<Grid item xs={12} md={6} lg={3} key={prod.id}>
						<Card data={prod} stock={5} />
					</Grid>
				))
			) : (
				<LinearProgress color="warning" />
			)}
		</Grid>
	);
}

export default ItemListContainer;

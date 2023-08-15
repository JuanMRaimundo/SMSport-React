import { useEffect, useState } from "react";

//MOCKS
import { products } from "../../mocks/data.js";
//COMPONENTS
import Card from "../Card/index.jsx";
//STYLES
import "./styles.css";
import Spinner from "react-bootstrap/Spinner";

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
		<div className="list">
			{productos.length > 0 ? (
				productos.map((prod) => (
					<div key={prod.id}>
						<Card data={prod} stock={5} />
					</div>
				))
			) : (
				<Spinner animation="border" variant="warning" />
			)}
		</div>
	);
}

export default ItemListContainer;

import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
//MOCKS
import { products } from "../../mocks/data.js";
//COMPONENTS
import Card from "../../components/Card/index.jsx";
import { LinearProgress, Grid } from "@mui/material";

function Category() {
	const [productos, setProductos] = useState([]);
	const [isLoading, setisLoading] = useState(false);
	let { categoryID } = useParams();

	useEffect(() => {
		setisLoading(true);
		const filteredProductPromise = new Promise((resolve) =>
			setTimeout(() => resolve(products), 2000)
		);

		filteredProductPromise
			.then((data) => {
				const filteredProducts = data.filter(
					(prod) => prod.category === categoryID
				); // Filtra por categoría
				setProductos(filteredProducts);
				setisLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setisLoading(false);
			});
	}, [categoryID]);

	return (
		<Grid container spacing={2} className="list">
			{isLoading ? (
				<LinearProgress color="warning" />
			) : (
				productos.map((prod) => (
					<Grid item xs={12} md={6} lg={3} key={prod.id}>
						<Card data={prod} stock={5} />
					</Grid>
				))
			)}
		</Grid>
	);
}

export default Category;

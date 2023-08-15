import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
//MOCKS
import { products } from "../../mocks/data.js";
//COMPONENTS
import Card from "../../components/Card/index.jsx";
//STYLES
import Spinner from "react-bootstrap/Spinner";

function Category() {
	const [productos, setProductos] = useState([]);
	let { categoryID } = useParams();

	useEffect(() => {
		const filteredProductPromise = new Promise((resolve) =>
			setTimeout(() => resolve(products), 2000)
		);

		filteredProductPromise
			.then((data) => {
				const filteredProducts = data.filter(
					(prod) => prod.category === categoryID
				); // Filtra por categoría
				setProductos(filteredProducts);
			})
			.catch((error) => console.log(error));
	}, [categoryID]);

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

export default Category;

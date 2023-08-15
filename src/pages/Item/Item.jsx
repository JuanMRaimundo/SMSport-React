import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//MOCKS
import { products } from "../../mocks/data.js";

//COMPONENTS
import Card from "../../components/Card";
//STYLES
import Spinner from "react-bootstrap/Spinner";

function Item() {
	const [producto, setProducto] = useState(null); // Inicializar como null para indicar que no hay producto seleccionado
	let { id } = useParams();

	useEffect(() => {
		const selectedProductPromise = new Promise((resolve) =>
			setTimeout(() => resolve(products), 2000)
		);

		selectedProductPromise
			.then((data) => {
				const selectedProduct = data.find((prod) => prod.id === id); // Buscar el producto seleccionado
				setProducto(selectedProduct);
			})
			.catch((error) => console.log(error));
	}, [id]);
	//acá dejo fragmento para luego ver cómo agregar mayor descripción
	return (
		<>
			<div className="list">
				{producto ? (
					<Card data={producto} stock={5} />
				) : (
					<Spinner animation="border" variant="warning" />
				)}
			</div>
		</>
	);
}
export default Item;

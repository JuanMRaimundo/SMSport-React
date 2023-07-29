import { useEffect, useState } from "react";

import { products } from "../../mocks/data.js";
import Items from "../Items";
import Card from "../Card";
import "./styles.css";

function ItemListContainer({ greetings, stock }) {
	const [productos, setProducts] = useState([]);

	useEffect(() => {
		const result = new Promise((resolve) =>
			setTimeout(() => resolve(products), 2000)
		);
		result
			.then((data) => setProducts(data))
			.catch((error) => console.log(error));
	}, []);
	console.log(productos);

	return (
		<>
			<div>
				<Card stock="5" />
			</div>
			<div>
				<Items productos={productos} />
			</div>
		</>
	);
}

export default ItemListContainer;

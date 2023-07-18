import { useState } from "react";
import "./styles.css";

function ItemListContainer({ greetings }) {
	const [saludo, setSaludo] = useState(greetings);

	function changeGreeting() {
		setSaludo("¡Comencemos con tu compra!");
	}

	return (
		<div className="item-list-container">
			<Content saludo={saludo} changeGreeting={changeGreeting} />
		</div>
	);
}
function Content({ saludo, changeGreeting }) {
	return (
		<>
			<p>{saludo}</p>
			<button className="btn btn-warning" onClick={changeGreeting}>
				Comencemos
			</button>
		</>
	);
}

export default ItemListContainer;

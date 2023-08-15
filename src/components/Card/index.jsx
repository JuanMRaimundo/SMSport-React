import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Card({ stock, data }) {
	const [count, setCount] = useState(Math.min(0, stock));

	function increment() {
		if (count < 5 && stock > 0) {
			setCount((prevCount) => prevCount + 1);
		}
	}

	function decrement() {
		if (count > 0) {
			setCount((prevCount) => prevCount - 1);
		}
	}
	if (!data) {
		return "no se encontró producto"; // No renderizar nada si data es undefined
	}
	return (
		<div className="card contador" style={{ width: "18rem" }}>
			<Link to={`/item/${data.id}`}>
				<img className="card-img-top" src={data.image} alt="Card image cap" />
			</Link>

			<div className="card-body">
				<h5 className="card-title">{data.name}</h5>
				<p className="card-text">{data.description}</p>
				<p className="card-price">${data.precio}</p>
				<button
					className="btn btn-warning"
					onClick={decrement}
					disabled={count === 0}
				>
					-
				</button>
				<div className="alert alert-secondary">{count}</div>
				<button
					className="btn btn-warning"
					onClick={increment}
					disabled={count === 5 || stock === 0}
				>
					+
				</button>
				<button className="btn btn-dark" disabled={stock === 0}>
					Agregar al Carrito
				</button>
			</div>
		</div>
	);
}

export default Card;

import { useState, useEffect } from "react";
import Camiseta from "../../assets/icons/camisetaB.jpg";

function Card({ stock }) {
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
	return (
		<div className="card contador" style={{ width: "18rem" }}>
			<img className="card-img-top" src={Camiseta} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Camiseta Boca Juniors</h5>
				<p className="card-text">Titular 22/23 De Hombre</p>
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

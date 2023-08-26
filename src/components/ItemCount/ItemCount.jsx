import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({ stock }) => {
	const [count, setCount] = useState(Math.min(0, stock));
	const { addToCart } = useContext(CartContext);
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
		<div>
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
			<button
				onClick={() => {
					addToCart({ count });
					alert("Items agregados al carrito");
				}}
				className="btn btn-dark"
				disabled={stock === 0}
			>
				Agregar al Carrito
			</button>
		</div>
	);
};

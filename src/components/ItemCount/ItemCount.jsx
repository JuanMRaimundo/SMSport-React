import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({ stock, product }) => {
	const { cart, addToCart, removeFromCart, clearCart, cartTotal } =
		useContext(CartContext);
	const [count, setCount] = useState(0);

	const increment = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};
	const addToCartHandler = () => {
		addToCart(product.id, count); // Aquí pasamos el ID del producto y la cantidad al contexto del carrito
		setCount(1);
	};

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
				onClick={addToCartHandler}
				className="btn btn-dark"
				disabled={stock === 0}
			>
				Agregar al Carrito
			</button>
			<button onClick={removeFromCart}>Eliminar producto</button>
		</div>
	);
};

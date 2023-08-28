import Cart from "../../../assets/icons/cart.png";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
//ROUTER
import { Link } from "react-router-dom";

import "./styles.css";

function CartWidget() {
	const { cart, addToCart, removeFromCart, clearCart, cartTotal, toalItems } =
		useContext(CartContext);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		const newTotalItems = cart.reduce((total, item) => total + item.count, 0);
		setTotalItems(newTotalItems);
	}, [cart]);

	return (
		<div>
			<img src={Cart} alt="cart" className="cart-icon" />

			<p>{totalItems}</p>
		</div>
	);
}

export default CartWidget;

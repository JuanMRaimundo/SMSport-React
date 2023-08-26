import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const addToCart = (product) => {
		setCart([...cart, product]);
	};
	/* 	const value = {
		cart,
		addToCart,
	}; */

	return (
		<CartContext.Provider value={{ addToCart, cart }}>
			{children}
		</CartContext.Provider>
	);
};

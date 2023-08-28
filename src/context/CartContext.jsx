import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (productId, count = 1) => {
		const itemIndex = cart.findIndex(
			(cartItem) => cartItem.id === productId.id
		);

		if (itemIndex !== -1) {
			const updatedCart = [...cart];
			updatedCart[itemIndex].count += count;
			setCart(updatedCart);
		} else {
			setCart([...cart, { id: productId, count }]);
		}
	};

	const removeFromCart = (itemId) => {
		const updatedCart = cart.filter((item) => item.id !== itemId);
		setCart(updatedCart);
	};
	const totalItems = () => {
		return cart.length;
	};

	const clearCart = () => {
		setCart([]);
	};

	const cartTotal = cart.reduce((total, item) => total + item.price, 0);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				cartTotal,
				totalItems,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	return useContext(CartContext);
};

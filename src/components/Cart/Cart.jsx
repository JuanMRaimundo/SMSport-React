import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
	const { cart } = useContext();
	const [addedItem, setaddedItem] = useState([]);
	console.log(cart);

	return <div>Cart</div>;
};

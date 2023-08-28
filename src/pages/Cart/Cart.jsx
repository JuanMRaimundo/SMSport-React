import { useState, createContext, useContext } from "react";
//COMPONENTS
import Card from "../../components/Card";
import { Grid, LinearProgress } from "@mui/material";
import { CartContext } from "../../context/CartContext";

function Cart() {
	const { cart } = useContext(CartContext);

	return (
		<div className="list">
			{cart.length > 0 ? (
				cart.map((prod) => (
					<Grid item xs={12} md={6} lg={3} key={prod.id}>
						<Card data={prod} stock={5} />
					</Grid>
				))
			) : (
				<LinearProgress color="warning" />
			)}
		</div>
	);
}

export default Cart;

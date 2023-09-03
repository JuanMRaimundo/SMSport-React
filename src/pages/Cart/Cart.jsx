import { useState, useContext } from "react";
//COMPONENTS
import Card from "../../components/Card";
import Contact from "../Contact/Contact";
import { Grid, LinearProgress } from "@mui/material";
import { CartContext } from "../../context/CartContext";

function Cart() {
	const { cart } = useContext(CartContext);

	return (
		<div className="cart">
			<div className="">
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

			<Contact />
		</div>
	);
}

export default Cart;

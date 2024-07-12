import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
//STYLES
import "./styles.css";

function PurchaseOrder({ orderData }) {
	return (
		<div className="conteiner-orden-compra">
			<div className="orden-compra">
				<h2>¡GRACIAS POR TU COMPRA!</h2>
				<h3>Orden de Compra</h3>
				<p>Nombre: {orderData.name}</p>
				<p>Email: {orderData.email}</p>
				<p>Ciudad: {orderData.city}</p>
				<p>Teléfono:{orderData.phonenumber}</p>
				<p>Código de compra: ${orderData.id}</p>
				<Link to="/">
					<Button>Volver al Inicio</Button>
				</Link>
			</div>
		</div>
	);
}

export default PurchaseOrder;

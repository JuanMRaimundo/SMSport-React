import { React, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
	addDoc,
	doc,
	collection,
	getFirestore,
	writeBatch,
	getDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import OrdenCompra from "../../components/OrdenCompra/OrdenCompra";

//STYLES
import "./styles.css";

const initialState = {
	name: "",
	email: "",
	city: "",
	number: "",
};

function Checkout() {
	const { cart, clearCart, sumTotal } = useContext(CartContext);
	const [showForm, setShowForm] = useState(true);
	const [orderId, setOrderId] = useState("");
	const [values, setValues] = useState(initialState);
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const ordenData = {
			name: values.name,
			email: values.email,
			city: values.city,
			telefono: values.number,
			total: sumTotal(),
		};

		const docRef = await addDoc(collection(db, "ordenesCompra"), {
			ordenData,
		});
		setOrderId(docRef.id);
		clearCart();
		setShowForm(false);
	};

	return (
		<>
			{showForm ? (
				<>
					<h2> Terminá tu Compra</h2>
					<Form onSubmit={onSubmit}>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type="text"
								placeholder="Nombre"
								value={values.name}
								name="name"
								onChange={handleOnChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email"
								value={values.email}
								name="email"
								onChange={handleOnChange}
							/>
							<Form.Text className="text-muted">
								No compartiremos tu información con nadie. Es solo por la
								seguridad de tu compra.
							</Form.Text>
						</Form.Group>
						<Form.Group className="mb-12" controlId="formBasicPassword">
							<Form.Label>Ciudad</Form.Label>
							<Form.Control
								type="text"
								placeholder="Ciudad"
								value={values.city}
								name="city"
								onChange={handleOnChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check
								type="checkbox"
								label="Recibir orden de compra por e-mail"
							/>
						</Form.Group>
						<span>
							<Button
								className="btn btn-warning"
								variant="primary"
								type="submit"
							>
								Aceptar
							</Button>
						</span>
					</Form>
				</>
			) : (
				<OrdenCompra
					ordenData={{
						name: values.name,
						email: values.email,
						city: values.city,
						telefono: values.number,
						total: sumTotal(),
						id: orderId,
					}}
				/>
			)}
		</>
	);
}

export default Checkout;

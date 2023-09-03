import { useEffect, useState } from "react";

//DATA

import { db } from "../../firebase/firebaseConfig.jsx";
//COMPONENTS
import Card from "../Card/index.jsx";
import { Grid, LinearProgress, Container } from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
//STYLES
import "./styles.css";

function ItemListContainer() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const q = query(collection(db, "sportswear"));
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProductos(docs);
		};
		getProducts();
	}, []);

	return (
		<Grid className="list">
			{productos.length > 0 ? (
				productos.map((prod) => (
					<Grid item xs={12} md={6} lg={3} key={prod.id}>
						<Card data={prod} stock={5} />
					</Grid>
				))
			) : (
				<LinearProgress color="warning" />
			)}
		</Grid>
	);
}

export default ItemListContainer;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//STYLES
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//PAGES
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Item from "./pages/Item/Item";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import { CartProvider } from "./contexts/CartContext";
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (query) => {
		setSearchQuery(query);
	};
	return (
		<CartProvider>
			<Router>
				<Navbar onSearch={handleSearch} />

				<Routes>
					<Route exact path="/" element={<Home searchQuery={searchQuery} />} />
					<Route exact path="/category/:categoryID" element={<Category />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/item/:id" element={<Item />} />
					<Route exact path="/cart" element={<Cart />} />
					<Route exact path="/checkout" element={<Checkout />} />
				</Routes>
			</Router>
		</CartProvider>
	);
}

export default App;

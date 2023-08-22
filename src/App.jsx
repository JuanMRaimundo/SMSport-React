import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//STYLES
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//PAGES
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Item from "./pages/Item/Item";
import Contact from "./pages/Contact/Contact";

//COMPONENTS
import NavbarIndex from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<Router>
			<NavbarIndex />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/category/:categoryID" element={<Category />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/item/:id" element={<Item />} />
			</Routes>
		</Router>
	);
}

export default App;

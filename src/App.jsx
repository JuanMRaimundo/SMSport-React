import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarIndex from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<main className="main">
			<NavbarIndex />
			<ItemListContainer greetings="¡Bienvenidos!" stock="10" />
		</main>
	);
}

export default App;

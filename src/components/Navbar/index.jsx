import "./styles.css";
import Logo from "../../assets/icons/logo.png";
import CartWidget from "./CartWidget";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarIndex() {
	return (
		<Navbar expand="lg" className="bg-warning">
			<Container fluid>
				<img src={Logo} alt="logo" className="logo-icon" />
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0 h5"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="#action1">Inicio</Nav.Link>
						<Nav.Link href="#action2">Contacto</Nav.Link>
						<NavDropdown title="Productos" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Indumentaria</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Elementos para tu Gym
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Presupuesto</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#" disabled>
							Nosotros
						</Nav.Link>
						<CartWidget />
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Buscar"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-dark">Buscar</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarIndex;

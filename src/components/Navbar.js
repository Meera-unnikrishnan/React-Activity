import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.svg";
export default function ShowNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Brand logo"
          />
        </Navbar.Brand>

        <Navbar.Brand href="/">REACT APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link href="page1">Page1</Nav.Link>
            <Nav.Link href="page2">Page2</Nav.Link>
            <Nav.Link href="page3">Page3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// 1. Importar React
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// 2. Crear componente
const Newnavbar = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark mb-4">
      <Container fluid>
        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
          <Nav
            className="col me-auto mt-3 my-2 my-lg-0 justify-content-end"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#" className="nav-link active">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
  };
// 3. Exportar componente
export default Newnavbar
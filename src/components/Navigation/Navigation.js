import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Tilt from "react-tilt";
function Navigation() {
  return (
    <Container fluid className="p-0">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand className="ml-3 mr-4" href="#">
          <Tilt>
            <img
              src="https://i.ibb.co/JqQ7fM9/logo.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="My Face Recognistion logo"
            />
          </Tilt>
        </Navbar.Brand>
        <Navbar.Brand href="#">MY FACE REGONITION</Navbar.Brand>
        <Nav className="mr-auto h5">
          <Nav.Link href="#">Home</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end mr-3">
          <Navbar.Text className="h5">Sign out</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;

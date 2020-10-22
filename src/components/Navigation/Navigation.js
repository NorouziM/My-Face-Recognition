import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Tilt from "react-tilt";

function Navigation({ route, onSignInClick }) {
  return (
    <Container fluid className="p-0 w-100">
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
        <Navbar.Collapse className="justify-content-end mr-2">
          {route === "signIn" ? (
            <Navbar.Text
              onClick={() => onSignInClick("signOut")}
              className="h5"
            >
              Sign out
            </Navbar.Text>
          ) : (
            <React.Fragment>
              <Navbar.Text
                onClick={() => onSignInClick("signOut")}
                className="h5"
              >
                {" Sign in"}
              </Navbar.Text>
              <Navbar.Text
                onClick={() => onSignInClick("register")}
                className="ml-4 h5"
              >
                {"Register "}
              </Navbar.Text>
            </React.Fragment>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigation;

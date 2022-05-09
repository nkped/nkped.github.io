//React
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
//Styles
import "./App.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import BlogDropdown from "./routes/blogDropdown";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Nils-Kristian Pedersen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/om">Om</Nav.Link>
                <Nav.Link href="/apps">Apps</Nav.Link>
                <NavDropdown title="Blog" id="basic-nav-dropdown">
                  <BlogDropdown />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

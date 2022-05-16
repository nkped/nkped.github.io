//React-Bootstrap
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
//Components
import BlogDropdown from "./blogDropdown";

export function MyNavBar() {
  return (
    <nav className="bg-dark navbar-dark">
      <Navbar expand="lg">
        <Container className="mb-5 mt-2">
          <Navbar.Brand className="text-primary" href="/">
            NKPED
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/om">Om</Nav.Link>
              <Nav.Link href="/apps">Apps</Nav.Link>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="/blog">
                  Velkommen til Blog
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <BlogDropdown />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

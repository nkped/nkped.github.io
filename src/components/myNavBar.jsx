//React-Bootstrap
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { HouseDoor } from "react-bootstrap-icons";
//Components
import BlogDropdown from "./blogDropdown";

export function MyNavBar() {
  return (
    <Container fluid className="px-3">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="pt-3 pb-5 px-1"
      >
        <Navbar.Brand href="/#/">
          <HouseDoor size={50} className="color" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#/kontakt">Info</Nav.Link>
            <Nav.Link href="/#/om">Om</Nav.Link>
            <Nav.Link href="/#/skills">Skills</Nav.Link>
            <Nav.Link href="/#/blog">Blog</Nav.Link>

            <NavDropdown
              title="Seneste Posts"
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
              <BlogDropdown />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

/*
 */

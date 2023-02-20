import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

Logo;
const NavbarNEW = () => {
  return (
    <section>
      {/* +++++++++++++++++++++++++ */}

      <Navbar
        className="p-0 navbar navbar-expand-lg   cssFontNavbarClass"
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
      >
        <Container>
          <Logo></Logo>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link className="navLinkHover mx-3" href="/about">
                ABOUT
              </Nav.Link>
              <Nav.Link className="navLinkHover mx-3" href="/collection">
                COLLECTION
              </Nav.Link>
              <Nav.Link className="navLinkHover mx-3" href="/comingsoon">
                OUT SOON
              </Nav.Link>
              <Nav.Link className="navLinkHover mx-3" href="/newsletter">
                NEWSLETTER
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Outlet />
      </div>
    </section>
  );
};

export { NavbarNEW };

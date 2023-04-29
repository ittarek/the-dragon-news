
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

import { FaUserAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img className="img-fluid" src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p> {moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        {" "}
        <Button variant="danger">Latest</Button>{" "}
        <Marquee className="text-danger" speed={100}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>

      {/* nav bar */}
      <Navbar
        className="mb-4"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        {/* <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career"> Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user && (
                <Nav.Link href="#profile">
                  <FaUserCircle></FaUserCircle>
                </Nav.Link>
              )}
              <Nav.Link eventKey={2} href="#login">
                {user ? (
                  <Link>
                    <Button variant="secondary">LogOut</Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button>LogIn</button>
                  </Link>
                )}{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container> */}
      </Navbar>
    </Container>
  );
};

export default Header;

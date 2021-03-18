import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";

function OurNavbar() {

  return (
    <>
      <Navbar variant="dark" className="custNav">
        <Navbar.Brand href="/home">Plot of Gold</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/About">
            About
          </Link>
          {/* <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/signup">
            Signup
          </Link> */}
          <Link className="nav-link" to="/home">
            Plots
          </Link>
          <Link className="nav-link" to="/forum">
            Forum
          </Link>
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
        </Nav>
        {/* <Container
          className="navbar-nav ml-auto float-right"
          style={{ color: "#FFFFFF80", fontFamily: "Roboto" }}
        >
          TEST DATE
        </Container> */}
      </Navbar>
    </>
  );
}

export default OurNavbar;

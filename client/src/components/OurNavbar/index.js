import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function OurNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Landing
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
          <Link className="nav-link" to="/home">
            Plots
          </Link>
          <Link className="nav-link" to="/forum">
            Forum
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default OurNavbar;

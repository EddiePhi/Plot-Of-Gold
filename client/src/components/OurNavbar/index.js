import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function OurNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <div className="collapse navbar-collapse">
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
        <Container className="navbar-nav ml-auto float-right" style={{color: "#FFFFFF80", fontFamily: "Roboto"}}>
          TEST DATE
        </Container>
        </div>
      </Navbar>
    </>
  );
}

export default OurNavbar;

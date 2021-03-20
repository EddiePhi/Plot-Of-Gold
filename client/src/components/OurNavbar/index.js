import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";

function OurNavbar() {

  return (
    <>
      <Navbar variant="dark" className="custNav">
        <Navbar.Brand href="/home"><p style={{fontFamily: "'Press Start 2P', cursive", margin:"0px"}}>Plot of Gold</p></Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/about">
            <p style={{fontFamily: "'Press Start 2P', cursive", margin:"10px"}}>About</p>
          </Link>
          {/* <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/signup">
            Signup
          </Link> */}
          <Link className="nav-link" to="/home">
            <p style={{fontFamily: "'Press Start 2P', cursive", margin:"10px"}}>Plots</p>
          </Link>
          {/* <Link className="nav-link" to="/forum">
            Forum
          </Link> */}
          <Link className="nav-link" to="/logout">
            <p style={{fontFamily: "'Press Start 2P', cursive", margin:"10px"}}>Settings</p>
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

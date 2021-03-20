import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import OurJumbotron from "../components/OurJumbotron";
import DevImg from "../components/DevImg";
import david from "../assets/profilePictures/david.jpeg";
import eddie from "../assets/profilePictures/eddie.jpg";
import mike from "../assets/profilePictures/michael.jpeg";
import tim from "../assets/profilePictures/timothy.jpeg";
import seedling from "../assets/landingPage/seedling.jpg";
import "./pages.css"

function AboutPage() {
  return (
    <>
      <OurJumbotron>
        <Container className="d-flex justify-content-center">
          <div className="jumbo-body jumbo-image">
            <div>
              <h1  style={{fontStyle: "italic", fontFamily: "'Press Start 2P', cursive", color:"#485824"}}>Plot of Gold</h1>
              <h3 style={{fontStyle: "italic", fontFamily: "'Press Start 2P', cursive", color:"#485824"}}>A Gardening App</h3>
            </div>
          </div>
        </Container>
      </OurJumbotron>
      <div style={{margin: "60px"}}>
        <Row>
          <Col lg={8} className="d-flex justify-content-center">
            <Container>
              <div>
                <p style={{fontSize: "25px", fontStyle: "italic", fontFamily: "'Press Start 2P', cursive"}}className="d-flex justify-content-center">
                  What is Plot of Gold?
                </p>
              </div>
              <div>
                <p style={{fontFamily: "'Press Start 2P', cursive"}}>
                  It's an app for all of your gardening needs! If you have the
                  space, we have you covered. Plot of Gold is perfect for
                  maintaining both indoor and outdoor gardens. It has all the
                  resources and tools that new and experienced gardeners could
                  need, including a custom plot creator, weather forecasts and
                  other helpful plant info. When it comes to our relationship
                  with plants, as well as nature as a whole, our motto is
                  "Bee-Friendly"! (Get it?)
                </p>
              </div>
            </Container>
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={seedling}
              style={{ height: "275px" }}
              alt="Seedling"
            ></img>
          </Col>
        </Row>
      </div>
      <OurJumbotron>
        <Container className="d-flex justify-content-center">
          <p style={{color: "#485824", fontSize: "25px", fontStyle: "italic", fontFamily: "'Press Start 2P', cursive"}}>Why?</p>
        </Container>
        <Container className="d-flex justify-content-center">
          <p style={{color: "#485824", fontFamily: "'Press Start 2P', cursive"}}>
            With all the uncertainty in the world, it's nice to know where our
            food comes from and what's included. Plot of Gold keeps what we eat
            from being a mystery.
          </p>
        </Container>
      </OurJumbotron>
      <div style={{margin: "60px"}}>
        <Container className="d-flex justify-content-center">
          <p style={{fontSize: "25px", fontStyle: "italic", fontFamily: "'Press Start 2P', cursive"}}>Designed to help new and experienced gardeners!</p>
        </Container>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <p style={{fontFamily: "'Press Start 2P', cursive"}}>Learn</p>
            </Col>
            <Col>
              <p style={{fontFamily: "'Press Start 2P', cursive"}}>Grow</p>
            </Col>
            <Col>
              <p style={{fontFamily: "'Press Start 2P', cursive"}}>Connect</p>
            </Col>
          </Row>
        </Container>
      </div>
      <OurJumbotron style={{padding: "32px"}}>
        <Container className="d-flex justify-content-center">
          <p style={{color: "#485824", fontSize: "25px", fontStyle: "italic", fontFamily: "'Press Start 2P', cursive"}}>Say Hi to our Dev Team!</p>
        </Container>
        <Container style={{marginTop: "15px"}} className="d-flex justify-content-center">
          <Row >
            <Col>
              <DevImg src={david} />
            </Col>
            <Col>
              <DevImg src={eddie} />
            </Col>
            <Col>
              <DevImg src={mike} />
            </Col>
            <Col>
              <DevImg src={tim} />
            </Col>
          </Row>
        </Container>
      </OurJumbotron>
      <div style={{margin: "60px"}}>
        <Container className="d-flex justify-content-center">
          <Button className="btn-success mb-3" style={{height: "45px", fontSize: "30px", fontFamily: "'Press Start 2P', cursive"}}>
            <Link to="/home"><p style={{fontFamily: "'Press Start 2P', cursive", fontSize: "30px", marginTop: "6px"}}>Start</p></Link>
          </Button>
        </Container>
      </div>
    </>
  );
}

export default AboutPage;

import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import OurJumbotron from '../components/OurJumbotron';
import DevImg from '../components/DevImg';
import david from '../assets/profilePictures/david.jpeg';
import eddie from '../assets/profilePictures/eddie.jpg';
import mike from '../assets/profilePictures/michael.jpeg';
import tim from '../assets/profilePictures/timothy.jpeg';
import seedling from '../assets/landingPage/seedling.jpg';

import PlotTable from '../components/PlotTable'

function LandingPage() {
  return (
    <>
      <h1>Plot testing</h1>
      <PlotTable name="Name Test" rows={2} columns={2} />

      {/* <OurJumbotron>
        <Container className="d-flex justify-content-center">
          <div className="jumbo-body jumbo-image">
            <div>
              <h1 >Plot of Gold</h1>
              <h2 >A Gardening App</h2>
            </div>
          </div>
        </Container>
      </OurJumbotron>
      <div className="mb-3">
        <Row>
          <Col lg={8} className="d-flex justify-content-center">
            <Container>
              <div>
                <p className="d-flex justify-content-center">What is Plot of Gold?</p>
              </div>
              <div>
                <p>
                    It's an app for all of your gardening needs! 
                    If you have the space, we have you covered. 
                    Plot of Gold is perfect for maintaining both indoor and outdoor gardens. 
                    It has all the resources and tools that new and experienced gardeners could need, including a custom plot creator, weather forecasts and other helpful plant info.
                    When it comes to our relationship with plants, as well as nature as a whole, our motto is "Bee-Friendly"! (Get it?)
                </p>
              </div>
            </Container>
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <img src={seedling} style={{height:"200px"}} alt="Seedling"></img>
          </Col>
        </Row>
        
      </div>
      <OurJumbotron>
        <Container className="d-flex justify-content-center">
          <p>Why?</p>
        </Container>
        <Container className="d-flex justify-content-center">
          <p>
              With all the uncertainty in the world, it's nice to know where our food comes from and what's included. 
              Plot of Gold keeps what we eat from being a mystery.
          </p>
        </Container>
      </OurJumbotron>
      <div className="mb-3">
        <Container className="d-flex justify-content-center">
        <p>Designed to help new and experienced gardeners!</p>
        </Container>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <p>Learn</p>
            </Col>
            <Col>
              <p>Grow</p>
            </Col>
            <Col>
              <p>Connect</p>
            </Col>
          </Row>
        </Container>
      </div>
      <OurJumbotron>
        <Container className="d-flex justify-content-center">
          <p>Say Hi to our Dev Team!</p>
        </Container>
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <DevImg src={david}/>
            </Col>
            <Col>
              <DevImg src={eddie}/>
            </Col>
            <Col>
              <DevImg src={mike}/>
            </Col>
            <Col>
              <DevImg src={tim}/>
            </Col>
          </Row>
        </Container>
      </OurJumbotron>
      <div className="mb-3">
        <Container className="d-flex justify-content-center">
          <Button className="btn-success mb-3">Start</Button>
        </Container>
      </div> */}
    </>
  );
}

export default LandingPage;

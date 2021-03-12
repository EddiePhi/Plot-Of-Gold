import React, { useState } from "react";
import "./index.css";
import OurButtonProps from "../../components/OurButtonProps/index";
import BaseModal from "../../components/Modals/BaseModal";
import { Col, Row, Container, Button } from "react-bootstrap";

function HomePage() {
  //plant modal state and open/close functionality
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BaseModal title="Plant-i-Dex" show={show} close={handleClose} />
      <Container>
        <Row className="space" noGutters={true}>
          <Col className="text-center">
            <Button
              className="homeButton"
              variant="success"
              onClick={handleShow}
            >
              View Plant-i-Dex
            </Button>
          </Col>
          <Col className="text-center">
            <Button className="homeButton" variant="success">
              Create Plot
            </Button>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col className="text-center">
            <Button className="homeButton" variant="success">
              Visit Community Page
            </Button>
          </Col>
          <Col className="text-center">
            <Button className="homeButton" variant="success">
              Add Plant
            </Button>
          </Col>
        </Row>
        <Row className="text-center space">
          <Col className="text-center">
            <h1>No PLots Yet!</h1>
          </Col>
        </Row>
      </Container>

      {/* <OurButtonProps value="View Plant-i-Dex" onClick={handleShow} />
      <OurButtonProps value="Create Plot" />
      <OurButtonProps value="View Plots" />
      <OurButtonProps value="Visit the Communtiy Page" />
      <BaseModal title="Plant-i-Dex" show={show} close={handleClose} /> */}
    </>
  );
}

export default HomePage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import BaseModal from "../../components/Modals/BaseModal";
import CreatePlotModal from "../../components/Modals/CreatePlotModal";
import { Col, Row, Container, Button } from "react-bootstrap";

function HomePage() {
  //plant modal state and open/close functionality
  const [show, setShow] = useState(false);
  const plantClose = () => setShow(false);
  const plantShow = () => setShow(true);

  //create plot modal state and open/close functionality
  const [createPlot, setCreatePlot] = useState(false);
  const createPlotClose = () => setCreatePlot(false);
  const createPlotShow = () => setCreatePlot(true);

  return (
    <>
      <BaseModal title="Plant-i-Dex" show={show} close={plantClose} />
      <CreatePlotModal
        title="Enter Information Below to Create a new Plot"
        show={createPlot}
        close={createPlotClose}
      />
      <Container>
        <Row className="space" noGutters={true}>
          <Col className="text-center">
            <Button
              className="homeButton"
              variant="success"
              onClick={plantShow}
            >
              View Plant-i-Dex
            </Button>
          </Col>
          <Col className="text-center">
            <Button
              className="homeButton"
              variant="success"
              onClick={createPlotShow}
            >
              Create Plot
            </Button>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col className="text-center">
            <Button className="homeButton" variant="success">
              <Link to="/forum">
                <p>Community Page</p>
              </Link>
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
    </>
  );
}

export default HomePage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import BaseModal from "../../components/Modals/BaseModal";
import CreatePlotModal from "../../components/Modals/CreatePlotModal";
import { Col, Row, Container, Button, Dropdown } from "react-bootstrap";
import PlotTable from "../../components/PlotTable/index";

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
      <Container fluid>
        <Row>
          <Col md={2} className="my-auto text-center">
            <Button
              className="homeButton"
              variant="success"
              onClick={plantShow}
            >
              View Plant-i-Dex
            </Button>

            <Button
              className="homeButton"
              variant="success"
              onClick={createPlotShow}
            >
              Create Plot
            </Button>

            <Button className="homeButton" variant="success">
              <Link to="/forum" className="text-center">
                <p>Community Page</p>
              </Link>
            </Button>

            <Button className="homeButton" variant="success">
              Add Plant
            </Button>
          </Col>
          <Col md={1}></Col>
          <Col md={6} className="text-center">
            <PlotTable />
          </Col>
          <Col md={3}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;

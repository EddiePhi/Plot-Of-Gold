import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import BaseModal from "../../components/Modals/BaseModal";
import CreatePlotModal from "../../components/Modals/CreatePlotModal";
import { Col, Row, Container, Button, Dropdown } from "react-bootstrap";
import PlotTable from "../../components/PlotTable/index";
import API from "../../utils/API";

function HomePage() {
  //plant modal state and open/close functionality
  const [show, setShow] = useState(false);
  const plantClose = () => setShow(false);
  const plantShow = () => setShow(true);

  //create plot modal state and open/close functionality
  const [createPlot, setCreatePlot] = useState(false);
  const createPlotClose = () => setCreatePlot(false);
  const createPlotShow = () => setCreatePlot(true);

  //create current plot state
  const [plot, setPlot] = useState([]);

  useEffect(() => {
    loadSavedPlot();
  }, []);

  function loadSavedPlot() {
    API.getPlot()
      .then((res) => setPlot(res.data))
      .catch((err) => console.log(err));
    console.log(plot);
  }

  function showData(e) {
    e.preventDefault();
    console.log(plot);
  }

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

            <Button onClick={showData} className="homeButton" variant="success">
              Add Plant
            </Button>
          </Col>
          <Col md={1}></Col>
          <Col md={6} className="text-center">
            <PlotTable
              name="Name Test"
              rows={plot.plot_rows}
              columns={plot.plot_columns}
            />
          </Col>
          <Col md={3} className>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {plot.map((plotItem) => {
                  return (
                    <Dropdown.Item key={plotItem._id} href="#/action-1">
                      {plotItem.plot_name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;

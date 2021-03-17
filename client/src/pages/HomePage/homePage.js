import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import NoPlotFound from "../../components/NoPlotFound";
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
  //STATE DEFINITIONS

  //state: plants
  const [plants, setPLants] = useState([]);
  //state: plots
  const [plot, setPlot] = useState({
    plots: [],
    displayedPlot: {},
  });

  /////////////////////////////////////////////////////////

  //ON PAGE LOAD: define what data is retrieved and what states are updated
  useEffect(() => {
    loadSavedPlants();
    loadSavedPlot();
  }, []);

  //PLOT FUCNTIONALITY//
  //GET: retreive plot data and set to plot state
  function loadSavedPlot() {
    console.log("plot data reloaded");
    API.getPlot()
      .then((res) => setPlot({ plots: res.data, displayedPlot: res.data[0] }))

      .catch((err) => console.log(err));
  }

  function loadSelectedPlot(id) {
    API.getOnePlot(id)
      .then((res) => setPlot({ ...plot, displayedPlot: res.data }))
      .catch((err) => console.log(err));
  }

  function deletePlotEntery(id) {
    API.deletePlot(id)
      .then((res) => loadSavedPlot())
      .catch((err) => console.log(err));
  }

  function RenderPlotTable() {
    if (plot.displayedPlot) {
      return (
        <PlotTable
          data={plot.displayedPlot}
          plantData={plants}
          onClick={() => deletePlotEntery(plot.displayedPlot._id)}
          reload={loadSavedPlot}
        />
      );
    } else {
      return <NoPlotFound />;
    }
  }

  //////////////////////////////////////////////////////////

  //PLANT FUNCTIONALITY
  function loadSavedPlants() {
    API.getPlants()
      .then((res) => setPLants(res.data))
      .catch((err) => console.log(err));
  }

  //DEV ONLY
  function showData(e) {
    e.preventDefault();
    console.log(plot.displayedPlot);
  }

  return (
    <>
      <BaseModal
        title="Plant-i-Dex"
        show={show}
        close={plantClose}
        data={plants}
      />
      <CreatePlotModal
        title="Enter Information Below to Create a new Plot"
        show={createPlot}
        close={createPlotClose}
      />
      <Container fluid>
        <Row>
          <Col sm={2} className="my-auto text-center" id="first">
            <Button
              className="homeButton testColor"
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
          <Col sm={1}></Col>
          <Col sm={6} className="text-center" id="second">
            <RenderPlotTable />
          </Col>
          <Col sm={3} className="text-center" id="third">
            <Dropdown>
              <Dropdown.Toggle
                className="plotDropList"
                variant="success"
                id="dropdown-basic"
              >
                Your Plots
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {plot.plots.map((plotItem) => {
                  return (
                    <Dropdown.Item
                      key={plotItem._id}
                      onClick={() => loadSelectedPlot(plotItem._id)}
                    >
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

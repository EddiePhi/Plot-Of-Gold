import React, { useState, useEffect } from "react";
import "./index.css";
import NoPlotFound from "../../components/NoPlotFound";
import PlantiDexModal from "../../components/Modals/PlantiDexModal";
import CreatePlotModal from "../../components/Modals/CreatePlotModal";
import { Col, Row, Container, Button, Dropdown } from "react-bootstrap";
import PlotTable from "../../components/PlotTable/index";
import API from "../../utils/API";
import jwtDecode from "jwt-decode";

function HomePage() {
  //////////////////STATE DEFINITIONS/////////////////////////

  //PlantiDex state and open/close functionality
  const [show, setShow] = useState(false);
  const plantClose = () => setShow(false);
  const plantShow = () => setShow(true);

  //CreatePLot modal state and open/close functionality
  const [createPlot, setCreatePlot] = useState(false);
  const createPlotClose = () => setCreatePlot(false);
  const createPlotShow = () => setCreatePlot(true);

  //DATA STATES for Holding DB info from Axios requests//

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

  ////////////////////PLOT FUCNTIONALITY///////////////////////
  //GET: Retreive plot data from DB and set to plot state
  function loadSavedPlot() {
    const token = localStorage.getItem("jwtToken");
    const data = jwtDecode(token);

    API.getUser(data.id)
      .then((res) =>
        setPlot({ plots: res.data.plots, displayedPlot: res.data.plots[0] })
      )

      .catch((err) => console.log(err));
  }
  //Load displayed plot data based on the plot selected from dropdown list
  function loadSelectedPlot(id) {
    API.getOnePlot(id)
      .then((res) => setPlot({ ...plot, displayedPlot: res.data }))
      .then(console.log(plot.displayedPlot))
      .catch((err) => console.log(err));
  }
  //DELETE: delete request through axios to DB to delete plot that is currently displayed
  function deletePlotEntery(id) {
    API.deletePlot(id)
      .then(() => loadSavedPlot())
      .catch((err) => console.log(err));
  }

  //RENDER: if there is data in plot.displayedPlot render the plot table
  // if not then render the placeholder user instructions
  function RenderPlotTable() {
    if (plot.displayedPlot) {
      return (
        <PlotTable
          data={plot.displayedPlot}
          plantData={plants}
          onClick={() => deletePlotEntery(plot.displayedPlot._id)}
          reload={loadSelectedPlot}
        />
      );
    } else {
      return <NoPlotFound />;
    }
  }

  ///////////////////////////////////////////////////////////////////

  //////////////////PLANT FUNCTIONALITY//////////////////////////////
  //GET: retrive plants from the DB and save in the plants state
  function loadSavedPlants() {
    API.getPlants()
      .then((res) => setPLants(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <PlantiDexModal
        title="Plant-i-Dex"
        show={show}
        close={plantClose}
        data={plants}
      />
      <CreatePlotModal
        title="Enter Information Below to Create a New Plot"
        show={createPlot}
        close={createPlotClose}
        reload={loadSavedPlot}
      />
      <Container fluid>
        <Row>
          <Col sm={2} className="my-auto text-center" id="first">
            <Button className="homeButton testColor" onClick={plantShow}>
              <p
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: "10px",
                  marginTop: "5px",
                }}
              >
                View Plant-i-Dex
              </p>
            </Button>

            <Button className="homeButton" onClick={createPlotShow}>
              <p
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: "10px",
                  marginTop: "5px",
                }}
              >
                Create Plot
              </p>
            </Button>
          </Col>
          <Col sm={1}></Col>
          <Col sm={6} className="text-center" id="second">
            <RenderPlotTable />
          </Col>
          <Col sm={3} className="text-center" id="third">
            <Dropdown>
              <Dropdown.Toggle className="plotDropList" id="dropdown-basic">
                <p
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: "10px",
                    marginTop: "5px",
                    marginBottom: "0px",
                  }}
                >
                  Your Plots
                </p>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {plot.plots.map((plotItem) => {
                  return (
                    <Dropdown.Item
                      style={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: "10px",
                      }}
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

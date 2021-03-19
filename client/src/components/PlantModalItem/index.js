import React from "react";
import "./index.css";
import { Accordion, Card, Container, Col, Row, Button } from "react-bootstrap";

//Populates the list of plants within the "PlantiDex" Accordion Functionality
//Data is pulled from the Plants collection
function PlantModalItem({ data }) {
  return (
    <>
      {/*loop through plant data from GET on /home to create accordion cards */}
      {data.map((plant) => {
        return (
          <Accordion key={plant._id} defaultActiveKey="1">
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  className="plantButton"
                  /*Dynamic image background for each accordion button depending on the plant*/
                  style={{
                    backgroundImage: `url(/plant-images/${plant.plant_name
                      .split(" ")
                      .join("")
                      .toLowerCase()}.png)`,
                  }}
                  eventKey="0"
                ></Accordion.Toggle>
                <h2 style={{fontFamily: "'Press Start 2P', cursive", fontSize: "17px"}}>{plant.plant_name}</h2>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Container>
                    <Row>
                      <Col style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>Days to Maturity:</Col>
                      <Col style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>{plant.days_to_maturity}</Col>
                    </Row>
                    <Row>
                      <Col style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>Fruit Size:</Col>
                      <Col style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>{plant.fruit_size_inches}"</Col>
                    </Row>
                    <Row>
                      <Col style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>Sun Exposure:</Col>
                      <Col style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>{plant.sun}</Col>
                    </Row>
                    <Row>
                      <Col style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>Spread:</Col>
                      <Col style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>{plant.spread}"</Col>
                    </Row>
                    <Row>
                      <Col style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>Height:</Col>
                      <Col style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>{plant.height}"</Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </>
  );
}

export default PlantModalItem;

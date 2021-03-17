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
                <h2>{plant.plant_name}</h2>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Container>
                    <Row>
                      <Col>Days to Maturity:</Col>
                      <Col>{plant.days_to_maturity}</Col>
                    </Row>
                    <Row>
                      <Col>Fruit Size:</Col>
                      <Col>{plant.fruit_size_inches}"</Col>
                    </Row>
                    <Row>
                      <Col>Sun Exposure:</Col>
                      <Col>{plant.sun}</Col>
                    </Row>
                    <Row>
                      <Col>Spread:</Col>
                      <Col>{plant.spread}"</Col>
                    </Row>
                    <Row>
                      <Col>Height:</Col>
                      <Col>{plant.height}"</Col>
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

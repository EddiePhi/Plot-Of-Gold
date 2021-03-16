import React from "react";
import "./index.css";
import {
  Accordion,
  Card,
  Container,
  Col,
  Row,
  useAccordionToggle,
} from "react-bootstrap";

function PlantModalItem({ data }) {
  //Accordion functionality

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey);
    return (
      <button
        className="plantButton"
        type="button"
        variant="success"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <>
      {data.map((plant) => {
        return (
          <Accordion key={plant._id} defaultActiveKey="1">
            <Card>
              <Card.Header>
                <CustomToggle eventKey="0"></CustomToggle>
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

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
import Pepper from "../../assets/plant-images/pepper.png";

function PlantModalItem() {
  //Accordion functionality

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log("totally custom!")
    );

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
    <Accordion defaultActiveKey="1">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0"></CustomToggle>
          <h2>Plant Name 1</h2>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Container>
              <Row>
                <Col>Days to Maturity:</Col>
                <Col>50</Col>
              </Row>
              <Row>
                <Col>Fruit Size:</Col>
                <Col>4</Col>
              </Row>
              <Row>
                <Col>Sun Exposure:</Col>
                <Col>Full Sun</Col>
              </Row>
              <Row>
                <Col>Spread:</Col>
                <Col>16</Col>
              </Row>
              <Row>
                <Col>Height:</Col>
                <Col>22</Col>
              </Row>
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0"></CustomToggle>
          <h2>Plant Name 2</h2>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Container>
              <Row>
                <Col>Days to Maturity:</Col>
                <Col>50</Col>
              </Row>
              <Row>
                <Col>Fruit Size:</Col>
                <Col>4</Col>
              </Row>
              <Row>
                <Col>Sun Exposure:</Col>
                <Col>Full Sun</Col>
              </Row>
              <Row>
                <Col>Spread:</Col>
                <Col>16</Col>
              </Row>
              <Row>
                <Col>Height:</Col>
                <Col>22</Col>
              </Row>
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default PlantModalItem;

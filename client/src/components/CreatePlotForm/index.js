import React from "react";
import { Form, Col } from "react-bootstrap";
import "./style.css"

//Form content for the CreatePlot Modal
function CreatePlotForm({ text, placeHolder, onChange, value, name }) {
  return (
    <>
      <Form.Group>
        <Form.Row>
          <Form.Label column lg={2} style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}>
            {text}
          </Form.Label>
          <Col>
            <Form.Control style={{fontFamily: "'Press Start 2P', cursive", fontSize: "10px"}}
              name={name}
              type="text"
              placeholder={placeHolder}
              onChange={onChange}
              value={value}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </>
  );
}

export default CreatePlotForm;

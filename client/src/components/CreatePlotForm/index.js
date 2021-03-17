import React from "react";
import { Form, Col } from "react-bootstrap";

//Form content for the CreatePlot Modal
function CreatePlotForm({ text, placeHolder, onChange, value, name }) {
  return (
    <>
      <Form.Group>
        <Form.Row>
          <Form.Label column lg={2}>
            {text}
          </Form.Label>
          <Col>
            <Form.Control
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

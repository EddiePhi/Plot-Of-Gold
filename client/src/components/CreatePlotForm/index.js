import React from "react";
import { Form, Col } from "react-bootstrap";
import OurButtonProps from "../OurButtonProps";

function CreatePlotForm({ text, placeHolder }) {
  return (
    <>
      <Form.Group>
        <Form.Row>
          <Form.Label column lg={2}>
            {text}
          </Form.Label>
          <Col>
            <Form.Control type="text" placeholder={placeHolder} />
          </Col>
        </Form.Row>
      </Form.Group>
    </>
  );
}

export default CreatePlotForm;

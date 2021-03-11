import React from "react";
import { Form, Col } from "react-bootstrap";

function OurForm({text}) {
  return (
    <>
        <Form.Group>
            <Form.Row>
                <Form.Label column lg={2}>
                {text}
                </Form.Label>
                <Col>
                <Form.Control type="text" placeholder="Test Text" />
                </Col>
            </Form.Row>
        </Form.Group>
    </>
  );
}

export default OurForm;

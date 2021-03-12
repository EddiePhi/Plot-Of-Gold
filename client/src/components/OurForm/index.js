import React from "react";
import { Form} from "react-bootstrap";

function OurForm({text}) {
  return (
    <>
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label size="lg">Email address</Form.Label>
      <Form.Control className="form-control text-center" type="email" placeholder="Please enter your email address" />
      <Form.Text size="lg" className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control className="form-control text-center" type="password" placeholder="Please enter your password" />
    </Form.Group>
</Form>
    </>
  );
}
export default OurForm;

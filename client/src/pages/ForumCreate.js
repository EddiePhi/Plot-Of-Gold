import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function ForumCreate() {
  return (
    <>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control type="forum_title" placeholder="Title" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Forum Body</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="forum_body"
          placeholder="Text"
        />
        <Button variant="primary">
          <Link to="/forum">Post</Link>
        </Button>
      </Form.Group>
    </>
  );
}

export default ForumCreate;

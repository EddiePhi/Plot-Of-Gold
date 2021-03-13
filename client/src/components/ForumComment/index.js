import React from "react";
import { Card } from "react-bootstrap";

function ForumComment(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{props.User}</Card.Title>
          <Card.Text>{props.Comment}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ForumComment;

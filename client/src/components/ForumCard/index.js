import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ForumCard(props) {
  return (
    <>
      <Card>
        <Card.Header>
          {props.Header}
          <br></br>
          {props.Date}
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>{props.Text}</Card.Text>
          <Button variant="primary">
            <Link to="/forumPost">Go somewhere</Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ForumCard;

import React from "react";
import { Button, Form } from "react-bootstrap";
import ForumCard from "../components/ForumCard";
import ForumComment from "../components/ForumComment";
//import { BrowserRouter as Router, Route } from "react-router-dom";

function ForumPost() {
  return (
    <>
      <ForumCard
        Header="thatguy555"
        Date="12/12/21"
        Title="Gumbo Season"
        Text="Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
      ></ForumCard>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Share Your Thoughts</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button variant="primary">Comment</Button>
      </Form.Group>
      <ForumComment User="bob" Comment="i luv gumbo"></ForumComment>
      <ForumComment User="bob" Comment="i luv gumbo"></ForumComment>
      <ForumComment User="bob" Comment="i luv gumbo"></ForumComment>
      <ForumComment User="bob" Comment="i luv gumbo"></ForumComment>
    </>
  );
}

export default ForumPost;

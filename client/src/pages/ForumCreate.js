//import { set } from "mongoose";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API";

function ForumCreate() {
  //state: postForum
  const [postForumThread, setPostForum] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setPostForum({ ...setPostForum, [name]: value });
  }

  function submitForumPost(event) {
    event.preventDefault();

    API.postForum({
      forum_title: postForumThread.forum_title,
      forum_body: postForumThread.forum_body,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  console.log(postForumThread);

  return (
    <>
      <Form.Group>
        <Form.Label>Forum title</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          name="forum_title"
          placeholder="Title"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Forum Body</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          name="forum_body"
          as="textarea"
          rows={3}
          placeholder="Text"
        />
        <Button onClick={submitForumPost} variant="primary">
          Post
        </Button>
      </Form.Group>
    </>
  );
}

export default ForumCreate;

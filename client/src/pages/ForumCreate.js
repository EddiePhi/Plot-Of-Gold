//import { set } from "mongoose";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../utils/API";

function ForumCreate() {
  //state: postForum
  const [postForumThread, setPostForum] = useState({
    forum_title: "",
    forum_body: "",
  });

  const update = (data) => {
    setPostForum({ ...postForumThread, ...data });
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setPostForum({ ...setPostForum, [name]: value });
    console.log("hey");
  }

  function submitForumPost(event) {
    event.preventDefault();

    setPostForum({
      forum_title: postForumThread.forum_title,
      forum_body: postForumThread.forum_body,
    });

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
      <Form>
        <Form.Group>
          <Form.Label>Forum title</Form.Label>
          <Form.Control
            onChange={(e) => update({ forum_title: e.target.value })}
            name="forum_title"
            placeholder="Title"
            as="input"
            value={postForumThread.forum_title}
          />

          <Form.Label>Forum Body</Form.Label>
          <Form.Control
            onChange={(e) => update({ forum_body: e.target.value })}
            name="forum_body"
            as="input"
            rows={3}
            placeholder="Text"
            value={postForumThread.forum_body}
          />
          <Button onClick={submitForumPost} variant="primary">
            Post
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default ForumCreate;

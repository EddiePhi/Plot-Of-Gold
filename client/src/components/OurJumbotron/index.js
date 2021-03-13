import React from "react";
import { Jumbotron } from "react-bootstrap";
import './ourJumbotron.css'

function OurJumbotron(props) {
  return (
    <>
        <Jumbotron fluid>
        {props.children}
        </Jumbotron>
    </>
  );
}

export default OurJumbotron;
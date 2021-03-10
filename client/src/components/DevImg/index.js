import React from "react";
import { Col } from "react-bootstrap";

function DevImg({src}) {
  return (
    <>
        <Col>
            <img src={src} style={{height: "100px"}} alt="bee"/>
        </Col>
    </>
  );
}

export default DevImg;
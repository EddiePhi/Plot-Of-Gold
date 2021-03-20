import React from "react";
import { Col } from "react-bootstrap";

function DevImg({src}) {
  return (
    <>
        <Col>
            <img className="d-flex mx-auto" src={src} style={{height: "100px"}} alt="bee"/>
        </Col>
    </>
  );
}

export default DevImg;
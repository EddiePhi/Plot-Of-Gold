import React, { useState } from "react";
import "./index.css";
import { Modal, Col, Row, Container } from "react-bootstrap";
import OurButton from "../OurButton";
import PlantModalItem from "./PlantModalItem";

function BaseModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} ClassName="custModal">
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Plant-i-Dex
          </Modal.Title>
          <OurButton value="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <PlantModalItem />
          <PlantModalItem />
          <PlantModalItem />
          <PlantModalItem />
          <PlantModalItem />
          <PlantModalItem />
          <PlantModalItem />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BaseModal;

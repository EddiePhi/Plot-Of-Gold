import React, { useState } from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import OurButton from "../OurButtonProps";
import PlantModalItem from "./PlantModalItem";

function BaseModal({ title }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        ClassName="custModal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
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

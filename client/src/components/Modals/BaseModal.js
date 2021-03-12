import React from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import OurButton from "../OurButtonProps";
import PlantModalItem from "./PlantModalItem";

function BaseModal({ title, close, show }) {
  return (
    <>
      <Modal
        show={show}
        onHide={close}
        className="custModal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <OurButton value="Close" onClick={close} />
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

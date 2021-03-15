import React from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import OurButton from "../OurButtonProps";
import PlantModalItem from "../PlantModalItem/index";

function BaseModal({ title, close, show, data }) {
  //PLant info Sub Modal state and open/close

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
          <PlantModalItem data={data} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BaseModal;

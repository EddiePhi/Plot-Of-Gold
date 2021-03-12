import React from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import OurButton from "../OurButtonProps";
import OurForm from "../OurForm/index";
import PlantCard from "../PlantCard/index";

function BaseModal({ title, close, show, plantCard, createPlotForm }) {
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
          <PlantCard />
          <PlantCard />
          <PlantCard />
          <PlantCard />
          <PlantCard />
          <PlantCard />
          <PlantCard />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BaseModal;

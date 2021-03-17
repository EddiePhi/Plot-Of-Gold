import React from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import OurButton from "../OurButtonProps";
import PlantModalItem from "../PlantModalItem/index";

//Modal that shows when user selects"View Plant-I-Dex" from the Plots page
function PlantiDexModal({ title, close, show, data }) {
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

export default PlantiDexModal;

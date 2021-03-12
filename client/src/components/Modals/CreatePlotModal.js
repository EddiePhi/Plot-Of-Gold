import React from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import OurButton from "../OurButtonProps";
import OurForm from "../OurForm/index";

function CreatePlotModal({ title, close, show }) {
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
          <OurForm text="Plot Name" />
          <OurForm text="Rows" />
          <OurForm text="Columns" />
          <OurForm text="Location" placeHolder="Enter Zip Code" />
          <OurButton onClick={close}>Submit</OurButton>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreatePlotModal;

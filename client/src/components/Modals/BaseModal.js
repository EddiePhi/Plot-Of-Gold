import React, { useState } from "react";
import "./index.css";
import { Modal } from "react-bootstrap";
import OurButton from "../OurButton";

function BaseModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} ClassName="modal-90w">
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Plant-i-Dex
          </Modal.Title>
          <OurButton value="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BaseModal;

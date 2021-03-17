import React, { useState } from "react";
import API from "../../utils/API";
import "./index.css";
import { Modal } from "react-bootstrap";
import OurButton from "../OurButtonProps";
import CreatePlotForm from "../CreatePlotForm/index";

function CreatePlotModal({ title, close, show, onChange }) {
  //state for POST new plot
  const [postPlot, setPostPlot] = useState({
    name: "",
    rows: "",
    columns: "",
    zipcode: "",
  });

  //function to set new plot state from create plot form inputs
  function PostPlotInputChange(event) {
    const { name, value } = event.target;
    setPostPlot({ ...postPlot, [name]: value });
    console.log(postPlot);
  }

  //POST: if the form data is all filled submit new plot to the DB
  //and reset the state to helf form data
  function handleSubmit(event) {
    event.preventDefault();

    if (
      postPlot.name &&
      postPlot.rows &&
      postPlot.columns &&
      postPlot.zipcode
    ) {
      API.postNewPlot({
        plot_name: postPlot.name,
        plot_rows: postPlot.rows,
        plot_columns: postPlot.columns,
        zipcode: postPlot.zipcode,
        locations: postPlot.locations,
      })
        .then(() =>
          setPostPlot({
            name: "",
            rows: "",
            columns: "",
            zipcode: "",
          })
        )

        .catch((err) => console.log(err));
    }
  }

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
          <CreatePlotForm
            name="name"
            onChange={PostPlotInputChange}
            value={postPlot.name}
            text="Plot Name"
          />
          <CreatePlotForm
            name="rows"
            onChange={PostPlotInputChange}
            value={postPlot.rows}
            text="Rows"
          />
          <CreatePlotForm
            name="columns"
            onChange={PostPlotInputChange}
            value={postPlot.columns}
            text="Columns"
          />
          <CreatePlotForm
            name="zipcode"
            onChange={PostPlotInputChange}
            value={postPlot.zipcode}
            text="Location"
            placeHolder="Enter Zip Code"
          />
          <OurButton onClick={handleSubmit}>Submit</OurButton>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreatePlotModal;

import React, { useState } from "react";
import API from "../../utils/API";
import "./index.css";
import { Modal } from "react-bootstrap";
import OurButton from "../OurButtonProps";
import CreatePlotForm from "../CreatePlotForm/index";
import jwtDecode from "jwt-decode";

function CreatePlotModal({ title, close, show, reload }) {
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
  }

  //POST: if the form data is all filled submit new plot to the DB
  //and reset the state to helf form data
  function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("jwtToken");
    const data = jwtDecode(token);

    if (
      postPlot.name &&
      postPlot.rows &&
      postPlot.columns &&
      postPlot.zipcode
    ) {
      API.postNewPlot(data.id, {
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
        .then(() => {
          close();
        })
        .then(() => {
          reload();
        })

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
          <Modal.Title
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "12px",
            }}
          >
            {title}
          </Modal.Title>
          <OurButton className="modalBtn" value="Close" onClick={close} />
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
            text="Zip Code"
            placeHolder="Enter Zip Code"
          />
          <OurButton className="modalBtn" onClick={handleSubmit}>
            Submit
          </OurButton>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreatePlotModal;

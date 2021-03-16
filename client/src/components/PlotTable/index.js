import React, { useState } from "react";
import API from "../../utils/API";

// import ReactHtmlParser, {
//   processNodes,
//   convertNodeToElement,
//   htmlparser2,
// } from "react-html-parser";
import "./index.css";

import SeedIcon from "../../assets/icons8-seed-48.png";
import { Table, Dropdown } from "react-bootstrap";

function PlotTable({ data, plantData, onClick }) {
  const [postLocation, setPostLocation] = useState({
    x_y_coordinate: "",
    plant: [],
  });

  function locationSubmit(event) {
    event.preventDefault();
    if (postLocation.x_y_coordinate && postLocation.plant) {
      API.postLocation({
        x_y_coordinate: postLocation.x_y_coordinate,
        plant: [event.currenTarget.value()],
      })
        .then(() =>
          setPostLocation({
            x_y_coordinate: "",
            plant: [],
          })
        )
        .catch((err) => console.log(err));
    }
  }
  // let theader = `<table id="table" border="1">\n`;
  // let tbody = ``;
  // let tfooter = `</table>`;

  //CREATE TABLE FOR PLOT BASED ON USER INPUT (Drag and drop - jQuery UI)
  // for (let i = 0; i < data.rows; i++) {
  //   tbody += `<tr>`;
  //   for (let j = 0; j < data.columns; j++) {
  //     tbody += `<td   data-row="${i + 1}" data-col="${j + 1}">
  //               <img src=${TempIcon} alt="tempicon"></img>
  //           </td>`;
  //   }
  //   tbody += `</tr>`;
  // }

  // let wholeTable = theader + tbody + tfooter;
  // <div clasrsName="plot table">{ReactHtmlParser(wholeTable)}</div>;

  function RenderTable() {
    let rows = [];
    for (let i = 0; i < data.plot_rows; i++) {
      let rowID = `row${i}`;
      let cell = [];
      for (let j = 0; j < data.plot_columns; j++) {
        let cellID = `${i}-${j}`;
        cell.push(
          <td key={cellID} id={cellID} className="align-middle">
            <Dropdown>
              <Dropdown.Toggle className="dropItem" v>
                <img src={SeedIcon} alt="seed"></img>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {plantData.map((plant) => {
                  return (
                    <Dropdown.Item key={plant._id} onClick={locationSubmit}>
                      {plant.plant_name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </td>
        );
      }
      rows.push(
        <tr key={i} id={rowID}>
          {cell}
        </tr>
      );
    }
    return (
      <Table className="plot table">
        <tbody>{rows}</tbody>
      </Table>
    );
  }

  return (
    <>
      <div>
        <h2>{data.plot_name}</h2>{" "}
        <button className="deleteBtn" onClick={onClick}>
          X
        </button>
      </div>
      {<RenderTable />}
    </>
  );
}

export default PlotTable;

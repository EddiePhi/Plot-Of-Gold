import React from "react";
import API from "../../utils/API";
import "./index.css";
import SeedIcon from "../../assets/plant-images/icons8-seed-48.png";
import Soil from "../../assets/plant-images/icons8-soil-48.png";
import { Table, Dropdown } from "react-bootstrap";
// const images = require.context("../../../public/plant-images", true);

//////////////////////////////////////////
// DO NOT Delete Commented Functionality//
//////////////////////////////////////////

function PlotTable({ data, plantData, onClick, reload }) {
  //NOT USED CURRENTLY
  // useEffect(() => {
  //   handleImg();
  // }, []);

  //Changes Image in each table cell depending
  //on if a plant has been chosen for that location
  function handleImg(cellID) {
    let plantImg;
    let index = data.locations.findIndex(
      (loc) => loc.x_y_coordinate === cellID
    );

    if (index === -1) {
      plantImg = SeedIcon;
      return plantImg;
    } else {
      // let index = data.locations.findIndex((i) => i.x_y_coordinate === cellID);
      // console.log(index);

      // plantImg = images(`./${plantString}.png`);
      plantImg = Soil;
      return plantImg;
    }
  }
  //Adds plant name above the "planted" icon in plot table cell
  function handlePlantName(cellID) {
    let name;
    let index = data.locations.findIndex(
      (loc) => loc.x_y_coordinate === cellID
    );
    if (index !== -1) {
      let plantString = data.locations[index].plant[0].plant_name;

      name = plantString;
      return name;
    }
  }

  //POST: new location to the displayed Plot's locations array
  //then reloads the plot data
  function locationSubmit(plant, cellID, data) {
    API.postLocation(data._id, {
      x_y_coordinate: cellID,
      plant: [plant._id],
    })
      .then(() => reload(data._id))
      .catch((err) => console.log(err));
  }

  //Renders the plot table
  //Assigns a new ID for each row(<tr>) and each column(<td>)
  //which is then combined for the CellID: format "x-y"

  function RenderTable() {
    let rows = [];
    for (let i = 0; i < data.plot_rows; i++) {
      let rowID = `row${i}`;
      let cell = [];
      for (let j = 0; j < data.plot_columns; j++) {
        let cellID = `${i}-${j}`;
        cell.push(
          <td key={cellID} id={cellID} className="align-middle">
            {/* Contents of each cell(<td>) */}
            <p className="plotLabel">{handlePlantName(cellID)}</p>
            <Dropdown>
              <Dropdown.Toggle className="dropItem">
                <img src={handleImg(cellID)} alt="seed"></img>
              </Dropdown.Toggle>
              {/*maps through the plantdata prop to populate the dropdown menu*/}
              <Dropdown.Menu>
                {plantData.map((plant) => {
                  return (
                    <Dropdown.Item
                      key={plant._id}
                      onClick={() => locationSubmit(plant, cellID, data)}
                    >
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
      <div style={{ marginTop: "20px" }}>
        <h2 className="nameStyle">{data.plot_name}</h2>{" "}
        <button className="deleteBtn" onClick={onClick}>
          X
        </button>
      </div>
      {<RenderTable />}
    </>
  );
}

export default PlotTable;

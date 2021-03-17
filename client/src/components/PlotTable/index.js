import React from "react";
import API from "../../utils/API";
import "./index.css";
import SeedIcon from "../../assets/icons8-seed-48.png";
import Soil from "../../assets/icons8-soil-48.png";
import { Table, Dropdown } from "react-bootstrap";
const images = require.context("../../../public/plant-images", true);

function PlotTable({ data, plantData, onClick, reload }) {
  // useEffect(() => {
  //   handleImg();
  // }, []);

  function handleImg(cellID) {
    let plantImg;
    let index = data.locations.findIndex(
      (loc) => loc.x_y_coordinate === cellID
    );
    console.log(index);
    if (index === -1) {
      plantImg = SeedIcon;
      return plantImg;
    } else {
      // let index = data.locations.findIndex((i) => i.x_y_coordinate === cellID);
      // console.log(index);
      let plantString = data.locations[index].plant[0].plant_name.toLowerCase();
      console.log(plantString);
      // plantImg = images(`./${plantString}.png`);
      plantImg = Soil;
      return plantImg;
    }
  }

  function handlePlantName(cellID) {
    let name;
    let index = data.locations.findIndex(
      (loc) => loc.x_y_coordinate === cellID
    );
    if (index !== -1) {
      let plantString = data.locations[index].plant[0].plant_name.toLowerCase();
      console.log(plantString);
      name = plantString;
      return name;
    }
  }

  function locationSubmit(plant, cellID, data) {
    console.log(plant._id);
    console.log(cellID);
    console.log(data);
    API.postLocation(data._id, {
      x_y_coordinate: cellID,
      plant: [plant._id],
    })
      .then(() => reload())
      .catch((err) => console.log(err));
  }

  function RenderTable() {
    let rows = [];
    for (let i = 0; i < data.plot_rows; i++) {
      let rowID = `row${i}`;
      let cell = [];
      for (let j = 0; j < data.plot_columns; j++) {
        let cellID = `${i}-${j}`;

        cell.push(
          <td key={cellID} id={cellID} className="align-middle">
            <p className="plotLabel">{handlePlantName(cellID)}</p>
            <Dropdown>
              <Dropdown.Toggle className="dropItem">
                <img src={handleImg(cellID)} alt="seed"></img>
              </Dropdown.Toggle>

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

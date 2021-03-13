import React from "react";
import "./index.css";
import { Table } from "react-bootstrap";
import TempIcon from "../../assets/plant-images/lotus--v1.png";

function PlotTable() {
  return (
    <>
      <h2>Plot Name</h2>
      <Table className="plot table">
        <tbody>
          <tr>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
          </tr>
          <tr>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
          </tr>
          <tr>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
          </tr>
          <tr>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
          </tr>
          <tr>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
            <td>
              <img src={TempIcon} alt="tempicon"></img>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default PlotTable;

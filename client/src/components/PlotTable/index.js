import React from "react";

// import ReactHtmlParser, {
//   processNodes,
//   convertNodeToElement,
//   htmlparser2,
// } from "react-html-parser";
import "./index.css";

import TempIcon from "../../assets/lotus--v1.png";
import { Table } from "react-bootstrap";

function PlotTable({ data }) {
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
          <td key={cellID} id={cellID} onClick="null">
            <img src={TempIcon} alt="tempicon"></img>
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
      <h2>{data.plot_name}</h2>
      <RenderTable />
    </>
  );
}

export default PlotTable;

import React from "react";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import "./index.css";

import TempIcon from "../../assets/lotus--v1.png";

function PlotTable({ data }) {
  let theader = `<table id="table" border="1">\n`;
  let tbody = ``;
  let tfooter = `</table>`;

  // //CREATE TABLE FOR PLOT BASED ON USER INPUT (Drag and drop - jQuery UI)
  for (let i = 0; i < data.rows; i++) {
    tbody += `<tr>`;
    for (let j = 0; j < data.columns; j++) {
      tbody += `<td   data-row="${i + 1}" data-col="${j + 1}">
                <img src=${TempIcon} alt="tempicon"></img>
            </td>`;
    }
    tbody += `</tr>`;
  }

  let wholeTable = theader + tbody + tfooter;

  return (
    <>
      <div className="plot table">{ReactHtmlParser(wholeTable)}</div>
    </>
  );
}

export default PlotTable;

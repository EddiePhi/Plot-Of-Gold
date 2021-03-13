import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import "./index.css";
import { Table } from "react-bootstrap";
import TempIcon from "../../assets/plant-images/lotus--v1.png";


function PlotTable({name, rows, columns}) {
    let theader = `<table id="table" border="1">\n`;
    let tbody = ``;
    let tfooter = `</table>`;
    

    // //CREATE TABLE FOR PLOT BASED ON USER INPUT (Drag and drop - jQuery UI)
    for (let i = 0; i < rows; i++) {

        tbody += `<tr>`;
        for (let j = 0; j < columns; j++) {
            tbody += 
            `<td class="droppable" data-row="${i+1}" data-col="${j+1}">
                <div class="draggable"><p>${i+1},${j+1}</p></div>
            </td>`;
        }
        tbody += `</tr>`;
        }
        
        let wholeTable = theader + tbody + tfooter;

  return (
    <>
      <div>{ReactHtmlParser(wholeTable)}</div>
    
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

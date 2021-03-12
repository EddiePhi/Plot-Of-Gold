import React from "react";
import { ButtonGroup } from "react-bootstrap";
import OurButtonProps from "../OurButtonProps/index";

function HomeVertMenu({ open }) {
  return (
    <>
      <ButtonGroup vertical>
        <OurButtonProps
          className="homeMenu"
          value="View Plant-i-Dex"
          onClick={open}
        />
        <OurButtonProps value="Create Plot" />
        <OurButtonProps value="View Plots" />
        <OurButtonProps value="Extra?" />
      </ButtonGroup>
    </>
  );
}

export default HomeVertMenu;

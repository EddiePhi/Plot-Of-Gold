import React from "react";
import { Button } from "react-bootstrap";
import './style.css'

function OurButtonProps({ value, onClick, className }) {
  return (
    <>
      <Button style={{fontFamily: "'Press Start 2P', cursive"}}
        className={className}
        // variant="success"
        as="input"
        type="submit"
        value={value}
        onClick={onClick}
      />
    </>
  );
}

export default OurButtonProps;

import React from "react";
import { Button } from "react-bootstrap";

function OurButtonProps({ value, onClick, className }) {
  return (
    <>
      <Button
        className={className}
        variant="success"
        as="input"
        type="submit"
        value={value}
        onClick={onClick}
      />
    </>
  );
}

export default OurButtonProps;

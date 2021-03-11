import React from "react";
import { Button } from "react-bootstrap";

function OurButtonProps({ value, onClick }) {
  return (
    <>
      <Button
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

import React from "react";
import { Button } from "react-bootstrap";

function OurButton({ value, onClick }) {
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

export default OurButton;

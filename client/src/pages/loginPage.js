import React from "react";
import OurForm from "../components/OurForm";
import OurButtonProps from "../components/OurButtonProps";

function LoginPage() {
  return (
    <>
    <div className="form-control text-center">
      <h1 className="form-control text-center">Login Page</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <OurForm></OurForm>
    <OurButtonProps></OurButtonProps>
    <br></br>
    <br></br>
    <div className="level has-text-centered">
        <a className="level-item has-text-white has-text-centered" href="/signup" style={{margin: '0px'}}>New user? Click here to sign up.</a>
      </div>
    </div>
    </>
  );
}

export default LoginPage;

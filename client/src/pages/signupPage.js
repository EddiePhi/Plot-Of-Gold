import React from "react";
import OurForm from "../components/OurForm";
import OurButtonProps from "../components/OurButtonProps";

function SignupPage() {
  return (
    <>
     <div className="form-control text-center">
      <h1 className="form-control text-center">Signup Page</h1>
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
        <a className="level-item has-text-white has-text-centered" href="/login" style={{margin: '0px'}}>Already registered? Click here to login.</a>
      </div>
    </div>
    </>
  );
}

export default SignupPage;

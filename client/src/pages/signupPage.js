import React, { useState } from "react";
import API from "../utils/API";
import AuthForm from "../components/AuthForm";
import OurButtonProps from "../components/OurButtonProps";

function SignupPage() {
  //state to hold signup form info
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
  });

  //onchange function to set signup state
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSignUp({ ...signUp, [name]: value });
    console.log(signUp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (signUp.email && signUp.password) {
      API.postSignUp({
        email: signUp.email,
        password: signUp.password,
      })
        .then(() =>
          setSignUp({
            email: "",
            password: "",
          })
        )
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <div className="form-control text-center">
        <h1 className="form-control text-center">Signup Page</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <AuthForm
          email={signUp.email}
          password={signUp.password}
          onChange={handleInputChange}
        ></AuthForm>
        <OurButtonProps onClick={handleSubmit}></OurButtonProps>
        <br></br>
        <br></br>
        <div className="level has-text-centered">
          <a
            className="level-item has-text-white has-text-centered"
            href="/login"
            style={{ margin: "0px" }}
          >
            Already registered? Click here to login.
          </a>
        </div>
      </div>
    </>
  );
}

export default SignupPage;

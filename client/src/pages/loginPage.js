import React, { useState } from "react";
import API from "../utils/API";
import AuthForm from "../components/AuthForm";
import OurButtonProps from "../components/OurButtonProps";

function LoginPage() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  //onchange function to set login state
  function handleInputChange(event) {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
    console.log(login);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (login.email && login.password) {
      API.getLogin({
        email: login.email,
        password: login.password,
      })
        .then(() =>
          setLogin({
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
        <h1 className="form-control text-center">Login Page</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <AuthForm></AuthForm>
        <OurButtonProps></OurButtonProps>
        <br></br>
        <br></br>
        <div className="level has-text-centered">
          <a
            className="level-item has-text-white has-text-centered"
            href="/login"
            style={{ margin: "0px" }}
          >
            New user? Click here to sign up.
          </a>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

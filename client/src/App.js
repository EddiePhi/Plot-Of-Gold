import React, { useState } from "react";
import OurNavbar from "./components/OurNavbar";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import Homepage from "./pages/homePage";
import ForumPage from "./pages/ForumPage";

// import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <>
        <OurNavbar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/forum" component={ForumPage} />
      </>
    </Router>
  );
}

export default App;

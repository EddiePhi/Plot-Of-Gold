import React from 'react';
import logo from "./logo.svg";
import OurButton from "./components/OurButton";
import OurNavbar from "./components/OurNavbar";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <OurNavbar />
      <OurButton />
    </>
  );
}

export default App;


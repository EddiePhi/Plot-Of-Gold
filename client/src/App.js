import React from "react";
import OurButton from "./components/OurButton";
import OurNavbar from "./components/OurNavbar";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import "./App.css";
import BaseModal from "./components/Modals/BaseModal";

function App() {
  return (
    <>
      <OurNavbar />
      <OurButton />
      <BaseModal />
    </>
  );
}

export default App;

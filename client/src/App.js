import React, {useState} from 'react';
// import logo from "./logo.svg";
import {Container, Row, Button} from 'react-bootstrap'
import DevImg from "./components/DevImg";
import ForecastCard from "./components/ForecastCard";
import OurButton from "./components/OurButton";
import OurForm from "./components/OurForm";
import OurJumbotron from "./components/OurJumbotron";
import OurModal from "./components/OurModal"
import OurNavbar from "./components/OurNavbar";
import PlantCard from "./components/PlantCard";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import "./App.css";

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <OurNavbar />
      <OurButton />
      <Container>
        <Row>
          <DevImg src="https://i.imgur.com/9wxhSpQ.jpg"/>
          <DevImg src="https://i.imgur.com/9wxhSpQ.jpg"/>
          <DevImg src="https://i.imgur.com/9wxhSpQ.jpg"/>
          <DevImg src="https://i.imgur.com/9wxhSpQ.jpg"/>
        </Row>
      </Container>

      <ForecastCard/>
      <OurJumbotron/>

      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>
      <OurModal show={modalShow} onHide={() => setModalShow(false)} />

      <PlantCard/>
      <OurForm text="Test Text"/>
      
      
    </>
  );
}

export default App;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Oreo from "./../images/pet.JPG";
import Logo from "./../images/lmd1.jpg";
import './pet.css';

const PetFriendly = () => {
  return (
    <Container style={{backgroundColor:'rgb(232 225 207)', paddingTop: "5%"}}>
        <Row>
            <Col xs="12" sm="12" md="3" lg="3" xl="3"></Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6" style={{textAlign: "center"}}>
                <span style={{fontSize:"3vw", color: 'black'}}>YOUR FURRY FRIENDS ARE ALWAYS WELCOME AT LMD.</span><br/>
                <span style={{fontSize:'4vw',zIndex:"1", color:"rgb(190 137 13)",fontFamily: 'Brush Script MT, Brush Script Std, cursive'}}>Pet Friendly &#128062;</span>
            </Col>
            <Col xs="12" sm="12" md="3" lg="3" xl="3"></Col>
        </Row>
        <Row>
            <Col xs="6" sm="6" md="3" lg="3"><img src={Oreo} className="oreo" /></Col>
            <Col xs="6" sm="6" md="3" lg="3"><img src={Logo} className="oreo" /></Col>
            <Col xs="12" sm="12" md="6" lg="6"><span style={{color:"rgb(190 137 13)", fontSize: '2vw'}}><br/> Bring your pet along while you and your loved ones enjoy your favourite dishes - We are pet friendly ❤️</span></Col>
        </Row>
    </Container>
  )
}

export default PetFriendly
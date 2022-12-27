import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Oreo from "./../images/pet.JPG";
import Logo from "./../images/lmd1.jpg";
import './pet.css';

const PetFriendly = () => {
  return (
    <Container style={{backgroundColor:'rgb(232 225 207)', paddingTop: "10%"}}>
        <Row>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
            <Col xs="12" sm="12" md="8" lg="8" xl="8" style={{textAlign: "center"}}>
                <span className='headingBlack'>YOUR FURRY FRIENDS ARE ALWAYS WELCOME AT LMD.</span><br/>
                <span className='subHeading'>Pet Friendly &#128062;</span>
            </Col>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
        </Row>
        <Row>
            <Col xs="6" sm="6" md="3" lg="3"><img src={Oreo} className="oreo" /></Col>
            <Col xs="6" sm="6" md="3" lg="3"><img src={Logo} className="oreo" /></Col>
            <Col xs="12" sm="12" md="6" lg="6"><span className='content'><br/> Bring your pet along while you and your loved ones enjoy your favourite dishes - We are pet friendly ❤️</span></Col>
        </Row>
    </Container>
  )
}

export default PetFriendly
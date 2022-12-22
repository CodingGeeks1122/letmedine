import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Shakes from "./../images/shakes.jpg";
import Fish from "./../images/fish.JPG";
import Burger from "./../images/burger.JPG";
import Pizza from "./../images/pizza.JPG";
import Coffee from "./../images/coffee.JPG";
import Platter from "./../images/nonveg.JPG";
import './category.css';

const FoodCategory = () => {
  return (
    <Container style={{marginTop: "80px"}}>
        <Row>
            <Col xs="12" sm="12" md="3" lg="3" xl="3"></Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <span style={{fontSize:"3vw"}}>MEET OUR RESTAURANT FOOD &#38; BEVERAGES CATEGORY</span><br/>
                <span style={{fontSize:'4vw',zIndex:"1", color:"rgb(190 137 13)",fontFamily: 'Brush Script MT, Brush Script Std, cursive'}}>Restaurant food &#38; beverages</span>
            </Col>
            <Col xs="12" sm="12" md="3" lg="3" xl="3"></Col>
        </Row>
        <Row>
            <Col xs="6" sm="6" md="3" lg="3">
                <img src={Pizza} className="cat"></img>
            </Col>
            <Col xs="6" sm="6" md="3" lg="3">
                <img src={Burger} className="cat"></img>
            </Col>
            <Col xs="6" sm="6" md="3" lg="3">
                <img src={Platter} className="cat"></img>
            </Col>
            <Col xs="6" sm="6" md="3" lg="3">
                <img src={Fish} className="cat"></img>
            </Col>
            
        </Row>
        <Row style={{marginTop: "2%"}}>
        <Col xs="12" sm="12" md="3" lg="3"></Col>
        <Col xs="6" sm="6" md="3" lg="3">
                <img src={Coffee} className="cat"></img>
            </Col>
            <Col xs="6" sm="6" md="3" lg="3">
                <img src={Shakes} className="cat"></img>
            </Col>
        </Row>

    </Container>
  )
}

export default FoodCategory
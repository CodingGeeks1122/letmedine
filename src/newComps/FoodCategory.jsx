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
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
            <Col xs="12" sm="12" md="8" lg="8" xl="8">
                <span className='heading'>MEET OUR RESTAURANT FOOD &#38; BEVERAGES CATEGORY</span><br/>
                <span className='subHeading'>Restaurant food &#38; beverages</span>
            </Col>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
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
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Shakes from "./../images/shakes.jpg";
import Fish from "./../images/fish.JPG";
import Burger from "./../images/burger.JPG";
import Pizza from "./../images/pizza.JPG";
import Coffee from "./../images/coffee.JPG";
import Platter from "./../images/nonveg.JPG";
import Dessert from "./../images/dessert.jpg";
import Main from "./../images/north-indian.jpg";
import './category.css';

const FoodCategory = () => {
  return (
    <Container style={{marginTop: "80px", paddingBottom: '10%'}}>
        <Row>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
            <Col xs="12" sm="12" md="8" lg="8" xl="8">
                <span className='heading'>MEET OUR RESTAURANT FOOD &#38; BEVERAGES CATEGORY</span><br/>
                <span className='subHeading'>Restaurant food &#38; beverages</span>
            </Col>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
        </Row>
        <Row>
            <Col xs="6" sm="6" md="3" lg="3" className="img-hover-zoom">
                <img src={Pizza} className="cat"></img>
                <div className='tag'>Pizza</div>
            </Col>
            <Col xs="6" sm="6" md="3" lg="3" className="img-hover-zoom">
                <img src={Burger} className="cat"></img>
                <div className='tag'>Hamburger</div>
            </Col>
            <Col xs="6" sm="6" md="3" lg="3" className="img-hover-zoom">
                <img src={Platter} className="cat"></img>
                <div className='tag'>Steak &#38; Grilled Meat</div>
            </Col>
            <Col xs="6" sm="6" md="3" lg="3" className="img-hover-zoom">
                <img src={Fish} className="cat"></img>
                <div className='tag'>Sea Food &#38; Delicates</div>
            </Col>
            
        </Row>
        <Row style={{marginTop: "2%"}}>
        <Col xs="6" sm="6" md="3" lg="3" className="img-hover-zoom">
                <img src={Main} className="cat"></img>
                <div className='tag'>Indian Main Course</div>
            </Col>
        <Col xs="6" sm="6" md="3" lg="3" className="img-hover-zoom">
                <img src={Coffee} className="cat"></img>
                <div className='tag'>Hot Beverages</div>
            </Col>
            <Col xs="6" sm="6" md="3" lg="3" className="img-hover-zoom">
                <img src={Shakes} className="cat"></img>
                <div className='tag'>Sipples &#38; Shakes</div>
            </Col>
            <Col xs="6" sm="6" md="3" lg="3" className="img-hover-zoom">
                <img src={Dessert} className="cat"></img>
                <div className='tag'>Dessert</div>
            </Col>
        </Row>

    </Container>
  )
}

export default FoodCategory
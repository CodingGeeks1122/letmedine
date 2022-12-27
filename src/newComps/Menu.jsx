import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Menu = () => {
  return (
    <Container style={{paddingTop: "5%", backgroundColor: '#eeebe6'}}>
        <Row>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
            <Col xs="12" sm="12" md="8" lg="8" xl="8">
                <span className='headingBlack'>THE BEST FOOD AT THE BEST PRICE</span><br/>
                <span className='subHeading'>&emsp;&emsp;&emsp;&emsp;Menu</span>
            </Col>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
        </Row>
        <Row style={{alignItems: 'center'}}>
        <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
            <Col xs="12" sm="12" md="10" lg="10" xl="10">
            <a href="https://tbdigimenu.in/letmedine/" style={{fontSize:"3vw", color:'rgb(190 137 13)'}} target='_blank'>Click here to checkout the updated menu...</a>
            </Col>
            {/* <Col xs="12" sm="12" md="1" lg="1" xl="1"></Col> */}
        </Row>
    </Container>
  )
}

export default Menu
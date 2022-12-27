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
        <Col xs="12" sm="12" md="3" lg="3" xl="3"></Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
            <a href="https://tbdigimenu.in/letmedine/" style={{fontSize:"3vw", color:'rgb(190 137 13)'}}>Click here to checkout the updated menu...</a>
            </Col>
            <Col xs="12" sm="12" md="3" lg="3" xl="3"></Col>
        </Row>
    </Container>
  )
}

export default Menu
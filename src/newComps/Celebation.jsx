import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BTP from './../images/borntoparty.jpg';
import DECOR1 from './../images/decor1.JPG';
import DECOR2 from './../images/decor2.JPG';
import DECOR3 from './../images/decor3.JPG';
import DECOR4 from './../images/decor4.JPG';

const Celebation = () => {
  return (
    <Container style={{paddingTop: "5%", backgroundColor: '#eeebe6'}}>
        <Row>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
            <Col xs="12" sm="12" md="8" lg="8" xl="8">
                <span className='headingBlack'>CELEBRATE YOUR SPECIAL OCCASION WITH US</span><br/>
                <span className='subHeading'>Born to Party</span>
            </Col>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
        </Row>
        <Row style={{alignItems: 'center'}}>
        <Col xs="6" sm="6" md="6" lg="6" xl="6" style={{padding: '0px'}}><img src={BTP} className="grid"></img></Col>
        {/* <Col xs="6" sm="6" md="3" lg="3" xl="3" style={{padding: '0px'}}><img src={DECOR1} className="grid"></img></Col>
        <Col xs="6" sm="6" md="3" lg="3" xl="3" style={{padding: '0px'}}><img src={DECOR2} className="grid"></img></Col> */}
        <Col xs="6" sm="6" md="3" lg="3" xl="3" style={{padding: '0px'}}><img src={DECOR3} className="grid"></img></Col>
        <Col xs="6" sm="6" md="3" lg="3" xl="3" style={{padding: '0px'}}><img src={DECOR4} className="grid"></img></Col>
        
        
        </Row>
    </Container>
  )
}

export default Celebation
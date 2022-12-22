import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';

const BookTable = () => {
  return (
    <Container style={{backgroundColor:'#f6f4f1', margin: '5%', height:"100%", width:"80%"}}>
        <Row style={{textAlign: 'center', paddingTop: '5%'}}>
            <Col><span style={{fontSize: '2vw', color: '#18191a'}}>MAKE A RESERVATION</span><br/>
            </Col>
        </Row>
        <Row style={{paddingTop: '5%'}}>
            <Col sm="12" md="12">
                <span style={{fontSize: '1vw', color: '#18191a'}}>Full Name</span>
                <span style={{fontSize: '1vw', color: '#18191a'}}><hr className='gery-hr'/></span>
                <span style={{fontSize: '1vw', color: '#18191a'}}>Phone</span>
                <span style={{fontSize: '1vw', color: '#18191a'}}><hr className='gery-hr'/></span>
            </Col>
            <Col sm="6" md="6">
                <span style={{fontSize: '1vw', color: '#18191a'}}>No. of people</span>
                <span style={{fontSize: '1vw', color: '#18191a'}}><hr className='gery-hr'/></span>
            </Col>
            <Col sm="6" md="6">
                <span style={{fontSize: '1vw', color: '#18191a'}}>Date</span><br/>
                <span style={{fontSize: '1vw', color: '#18191a'}}><hr className='gery-hr'/></span>
            </Col>
            <Col sm="6" md="6">
                <span style={{fontSize: '1vw', color: '#18191a'}}>Time</span><br/>
                <span style={{fontSize: '1vw', color: '#18191a'}}><hr className='gery-hr'/></span>
            </Col>
            <Col sm="6" md="6"></Col>
            <Col xs="6" sm="6" md="4">
            <div style={{border: '1px solid black', fontSize: "1vw", padding: "1vw", textAlign: "center"}}>Book a Table</div>
            </Col>
        </Row>
    </Container>
  )
}

export default BookTable
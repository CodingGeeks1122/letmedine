import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import img1 from "./../images/img3.JPG";
import img2 from "./../images/img2.JPG";
import img3 from "./../images/img6.JPG";
import img4 from "./../images/img8.JPG";
import img5 from "./../images/img10.JPG";
import img6 from "./../images/img11.JPG";
import img7 from "./../images/img12.JPG";
import './gallery.css';


const Gallery = () => {
  return (
    <Container style={{padding: "5% 0px", backgroundColor: '#eeebe6'}}>
        <Row>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
            <Col xs="12" sm="12" md="8" lg="8" xl="8">
                <span className='headingBlack'>AWESOME GALLERY OF OUR RESTAURANT</span><br/>
                <span className='subHeading'>&emsp;&emsp;&emsp;&emsp;Gallery</span>
            </Col>
            <Col xs="12" sm="12" md="2" lg="2" xl="2"></Col>
        </Row>
        <Row>
            <Col style={{padding: '0px'}}>
                <Row><img src={img1} className="bigGrid" /></Row>
                <Row>
                    <Col style={{padding: '0px'}}><img src={img2} className="grid" /></Col>
                    <Col style={{padding: '0px'}}><img src={img3} className="grid" /></Col>
                </Row>
            </Col>
            <Col style={{padding: '0px'}}>
                <Row>
                    <Col style={{padding: '0px'}}><img src={img4} className="grid" /></Col>
                    <Col style={{padding: '0px'}}><img src={img2} className="grid" /></Col>
                </Row>
                <Row>
                    <Col style={{padding: '0px'}}><img src={img5} className="grid" /></Col>
                    <Col style={{padding: '0px'}}><img src={img6} className="grid" /></Col>
                </Row>
                <Row>
                    <div style={{border: '2px solid black', fontSize: "4vw", margin: "4vw 0vw 0vw 10vw"}}>Explore More</div>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Gallery
import React from 'react';
import Luxe from './images/luxe.jpg';
import './app.css'
import { Col, Container, Row } from 'react-bootstrap';
import About from './newComps/About';
import FoodCategory from './newComps/FoodCategory';
import Menu from './newComps/Menu';
import Gallery from './newComps/Gallery';
import Footer from './newComps/Footer';
import PetFriendly from './newComps/PetFriendly';
import Reviews from './newComps/Reviews';

function App1() {

  return (
    <div style={{backgroundColor: '#212121', textAlign: "left"}}>
      <Container style={{
        backgroundImage: `url(${Luxe})`, display:'inline-block'}} className='luxe'>
          <Row style={{border: '2px solid white',
           width: '100%', height: '20%', textAlign: 'center', paddingTop: '1%', backdropFilter: 'blur(4px)'}}>
            <Col xs="3" sm="3" md="2" lg="2" xl="2"><span style={{fontSize: "2vw"}}>Let Me Dine</span></Col>
            <Col></Col>
            <Col style={{paddingTop: "1%"}}> <span style={{fontSize: "1.5vw"}}>Home</span></Col>
            <Col style={{paddingTop: "1%"}}> <span style={{fontSize: "1.5vw"}}>Menu</span></Col>
            <Col style={{paddingTop: "1%"}}> <span style={{fontSize: "1.5vw"}}>Gallery</span></Col>
            <Col style={{paddingTop: "1%"}}><span style={{fontSize: "1.5vw"}}>Contact</span></Col>
          </Row>
          <Row className='align-items-center' style={{height: '44%'}}>
            <Col style={{textAlign: 'center', paddingTop: '10%'}}><span style={{fontSize:'10vw', fontWeight: 'bolder', wordSpacing:'0.2em', fontFamily: 'Brush Script MT, Brush Script Std, cursive'}}>Let Me Dine</span></Col>
          </Row>
          <Row className='align-items-center' style={{height: '40%'}}>
            <Col style={{textAlign: 'center', paddingTop: '2%'}}>
              <span style={{fontSize:'2vw'}}>RESTAURANT &#38; CAFE</span>
            </Col>
          </Row>
          <Row className='align-items-end'>
            <div className='fade'></div>
          </Row>
      </Container>

      <About/>
      <FoodCategory/>
      <Menu/>
      <Gallery/>
      <PetFriendly />
      <Reviews />
      <Footer/>
    </div>
  );
}

export default App1;

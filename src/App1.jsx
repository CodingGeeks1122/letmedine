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
import Celebation from './newComps/Celebation';

function App1() {

  return (
    <div style={{backgroundColor: '#212121', textAlign: "left"}}>
      <Container style={{
        backgroundImage: `url(${Luxe})`, display:'inline-block'}} className='luxe'>
          <Row style={{border: '2px solid white',
           width: '100%', height: '20%', textAlign: 'center', paddingTop: '1%', backdropFilter: 'blur(4px)'}}>
            <Col xs="3" sm="3" md="2" lg="2" xl="2"><span className='navHeading'>Let Me Dine</span></Col>
            <Col></Col>
            <Col style={{paddingTop: "1%"}}> <span className='navOptions'>Home</span></Col>
            <Col style={{paddingTop: "1%"}}> <a href="https://tbdigimenu.in/letmedine/" target='_blank' style={{color:'rgb(190 137 13)'}}><span className='navOptions'>Menu</span></a></Col>
            <Col style={{paddingTop: "1%"}}> <span className='navOptions'>Gallery</span></Col>
            <Col style={{paddingTop: "1%"}}><span className='navOptions'>Contact</span></Col>
          </Row>
          <Row className='align-items-center' style={{height: '44%'}}>
            <Col style={{textAlign: 'center', paddingTop: '10%'}}><span className='lmd'>Let Me Dine</span></Col>
          </Row>
          <Row className='align-items-center' style={{height: '40%'}}>
            <Col style={{textAlign: 'center', paddingTop: '2%'}}>
              <span className='lmdSm'>DINE-IN RESTAURANT</span>
            </Col>
          </Row>
          <Row className='align-items-end'>
            <div className='fade'></div>
          </Row>
      </Container>

      <About/>
      <FoodCategory/>
      <Menu/>
      <Celebation/>
      <Gallery/>
      <PetFriendly />
      <Reviews />
      <Footer/>
    </div>
  );
}

export default App1;

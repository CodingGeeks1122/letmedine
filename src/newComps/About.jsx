import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IMG from './../images/img5.JPG';
import './about.css';
import './../app.css';

const About = () => {
  return (
    <Container style={{marginTop: '80px'}} fluid>
        <Row>
            <Col md="6" sm="12" xs="12" lg="6" style={{paddingTop: '3%'}}>
              <span className='heading'>DELICIOUS FOOD FOR YOU</span><br/>
              <span className='subHeading'>about restaurant</span><br/>
              <span className='content'>&emsp;&emsp;&emsp;Located at Bhimtal, Let Me Dine (LMD) offers you a wide array of fresh food, Live barbecue section, BBQ by yourself and Pleasure of beautiful ambience.<br /><br />&emsp;&emsp;&emsp;We use the freshest ingredients in preparing our food to provide the best quality and taste. Try our delicious food today!</span><br/><br/><br/><br/>
              <span className='content'>WORKING HOURS<br/><br/></span>
              <span className='content'>Monday-Sunday:<span style={{color: '#7a7a7a'}}>_________</span>11:30am-10pm<br/>
              Breakfast &#38; Lunch:<span style={{color: '#7a7a7a'}}>_______</span>11:30-3pm<br/>
              Dinner:<span style={{color: '#7a7a7a'}}>_________________</span>6pm-10pm<br/>
              BBQ Hours:<span style={{color: '#7a7a7a'}}>_____________</span>7pm-10pm</span>
            </Col>
            <Col md="6" sm="12" xs="12" lg="6" style={{textAlign: 'right'}}>
                <hr />
                <span style={{fontSize:'4vw', color: '#7a7a7a'}}>Since 2022</span> <br/>
                <img src={IMG} width="90%" />
            </Col>
        </Row>
        <Row>
            <Col>
            </Col>
            <Col></Col>
        </Row>
      </Container>
  )
}

export default About
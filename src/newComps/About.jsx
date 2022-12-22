import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IMG from './../images/img5.JPG';
import './about.css';

const About = () => {
  return (
    <Container style={{marginTop: '80px'}} fluid>
        <Row>
            <Col md="6" sm="12" xs="12" lg="6" style={{paddingTop: '3%'}}>
              <span style={{fontSize: '5vw'}}>DELICIOUS FOOD FOR YOU</span><br/>
              <span style={{fontSize:'4vw',zIndex:"1", color:"rgb(190 137 13)",fontFamily: 'Brush Script MT, Brush Script Std, cursive'}}>about restaurant</span><br/>
              <span style={{fontSize: "2vw"}}>&emsp;&emsp;&emsp;Located at Bhimtal, Let Me Dine (LMD) offers you a wide array of fresh food, Live barbecue section, BBQ by yourself and Pleasure of beautiful ambience.<br /><br />&emsp;&emsp;&emsp;We use the freshest ingredients in preparing our food to provide the best quality and taste. Try our delicious food today!</span><br/><br/><br/><br/>
              <span style={{fontSize: "3vw"}}>WORKING HOURS<br/><br/></span>
              <span style={{fontSize: "2vw"}}>Monday-Sunday:<span style={{color: '#7a7a7a'}}>___________</span>11:30am-10pm<br/>
              Breakfast &#38; Lunch:<span style={{color: '#7a7a7a'}}>_________</span>11:30-3pm<br/>
              Dinner:<span style={{color: '#7a7a7a'}}>___________________</span>6pm-10pm<br/>
              BBQ Hours:<span style={{color: '#7a7a7a'}}>_______________</span>7pm-10pm</span>
            </Col>
            <Col md="6" sm="12" xs="12" lg="6" style={{textAlign: 'right'}}>
                <hr />
                <span style={{fontSize:'4vw', color: '#7a7a7a'}}>Since 2022</span> <br/>
                <img src={IMG} width="90%" height= "55%" />
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
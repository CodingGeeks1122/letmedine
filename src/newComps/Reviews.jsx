import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Cafe from "./../images/review.JPG";
import Review1 from "./../images/review1.JPG";
import Review2 from "./../images/review2.JPG";
import Review3 from "./../images/review3.JPG";
import Review4 from "./../images/review4.JPG";
import './reviews.css'

const Reviews = () => {
    const [Review, SetReview] = useState(Review1);
    const [buttonNo, setButtonNo] = useState("1");

    useEffect(()=>{
        if(buttonNo==="1") SetReview(Review1);
        else if(buttonNo==="2") SetReview(Review2);
        else if(buttonNo==="3") SetReview(Review3);
        else if(buttonNo==="4") SetReview(Review4);
        else SetReview(Review1);
    }, [buttonNo])

  return (
    <Container style={{backgroundColor:'#f6f4f1', paddingTop: '5%'}}>
        <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6" style={{textAlign: 'left'}}>
                <span style={{fontSize:"3vw", color: 'black'}}>WHAT OUR RESTAURANT PATRONS SAY</span><br/>
                <span style={{fontSize:'4vw',zIndex:"1", color:"rgb(190 137 13)",fontFamily: 'Brush Script MT, Brush Script Std, cursive'}}>Testimonials</span><br/>
                <img src={Review} width="100%"/><br/>
                <div style={{textAlign: 'right'}}>
                    <span className={buttonNo==="1" ? "dotClicked" : "dot"} onClick={() => setButtonNo("1")}></span>
                    <span className={buttonNo==="2" ? "dotClicked" : "dot"} onClick={() => setButtonNo("2")}></span>
                    <span className={buttonNo==="3" ? "dotClicked" : "dot"} onClick={() => setButtonNo("3")}></span>
                    <span className={buttonNo==="4" ? "dotClicked" : "dot"} onClick={() => setButtonNo("4")}></span>
                </div>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6" style={{textAlign: 'right'}}><img src={Cafe} width="100%"/></Col>
        </Row>
    </Container>
  )
}

export default Reviews
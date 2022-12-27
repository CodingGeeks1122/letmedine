import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BookTable from './BookTable';
import './footer.css';  

const Footer = () => {
  return (
    <Container style={{paddingTop: "40px"}}>
        <Row>
            <Col xs="12" sm="12" md="6">
                <Row><span className='heading'>YOU CAN CONTACT US BY ANY KIND OF COMMUNICATION</span><br/>
                <span className='subHeading'>&emsp;&emsp;Contact Information</span></Row>
                <Row style={{marginTop:"5%"}}>
                    <Col xs="12" sm="6" md="6">
                        <span style={{fontSize:'1.5vw', color: 'grey'}}>LOCATION</span><br/>
                        <span style={{fontSize:'2vw', color: 'white'}}>Mehragaon, Bhowali-Bhimtal Road, Uttarakhand (263132)</span>
                    </Col>
                    <Col xs="12" sm="6" md="6">
                        <span style={{fontSize:'1.5vw', color: 'grey'}}>PHONE</span><br/>
                        <span style={{fontSize:'2vw', color: 'white'}}>+91-8882322223</span><br/>
                        <span style={{fontSize:'2vw', color: 'white'}}>+91-8527915558</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" md="6">
                        <span style={{fontSize:'1.5vw', color: 'grey'}}>EMAIL</span><br/>
                        <span style={{fontSize:'1vw', color: 'rgb(190 137 13)'}}><a class="mailto" color='rgb(190 137 13)' href="mailto:airndelight@gmail.com">letmedinebhimtal@gmail.com</a></span>
                    </Col>
                    <Col xs="12" sm="6" md="6">
                        <span style={{fontSize:'1.5vw', color: 'grey'}}>SOCIAL ICONS</span><br/>
                        <div><a href="https://www.facebook.com/LMDBHIMTAL/?mibextid=LQQJ4d" target={'_blank'} class="fa fa-facebook"></a>
                        <a href="https://instagram.com/lmd_bhimtal?igshid=YmMyMTA2M2Y" target={'_blank'} class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="https://www.google.com/search?rlz=1C1GCEB_enIN983IN983&sxsrf=ALiCzsYqsLk7GMGAhRNqweJFoXWJ6O_Egw:1671717303138&q=Let+Me+Dine+Uttrakhand&si=AC1wQDAjJ8oRvNXHnN4UeD0TNg1RI9jH_YrDo7Xn4YuANY1GXO6A2nSI3jnEi1pOF8Nic6Qbuj-CAoOBJrjOUsZsgYQj-y81-0a-kC3h6zjnoFNrJTEXWKhD0lmTXpEI7nuqYbQcrzcFMgY1sVEu-OGt0nir6klED1J365QK4lT8XSrHRngTe-koIJDzBlPUDjiQmLy9wY0hq68otUiWEBwyjPlRopaD-LSSwyN-v-yo2du9lrV0qVQ%3D&sa=X&ved=2ahUKEwj-uJKgsI38AhU7XmwGHReyAgQQ6RN6BAg4EAE&biw=1920&bih=914&dpr=1" target={'_blank'} class="fa fa-google"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-youtube"></a></div>
                    </Col>
                </Row>
            </Col>
            
            <Col xs="12" sm="12" md="6">
                <BookTable/>
            </Col>
        </Row>
        <Row style={{marginTop: '4%'}}>
            {/* <Col><span style={{fontSize:'3vw'}}>Let Me Dine</span><br/> */}
            <Col><span style={{fontSize:'1vw'}}>2022 Let Me Dine. All Rights Reserved</span></Col>
            <Col></Col>
        </Row>
    </Container>
  )
}

export default Footer
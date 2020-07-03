import React from 'react';
import {Jumbotron,Container,Row,Col} from 'react-bootstrap';
import insta from '../instagram-sketched.svg';
import linkendin from '../linkedin.svg';
import git from '../github-image.svg';
import fb from '../facebook.svg';
import "./Footer.css"
const Footer1 = () =>{
    return(
       
  <Jumbotron fluid className="foot" >
  <Row>
    <Col xs={6} className="text-center"><h3><strong>Team</strong></h3>
      <h5>Anurag</h5><h5>Aneesha</h5><h5>Dishant</h5><h5>Rishita</h5></Col>
    <Col xs={6} className="text-center"><h3><strong>Connect us</strong></h3><img 
      className="h-100 mw-150 ml-2"
      width={40}
      src={insta}
      url="http://linkendin.com/jaketrent"
      alt="First slide"
      roundedCircle
    />   
    <img 
      className="h-100 mw-150 ml-2"
      width={40}
      src={fb}
      url="http://linkendin.com/jaketrent"
      alt="First slide"
      roundedCircle
    />
    <img 
      className="h-100 mw-150 ml-2"
      width={40}
      src={linkendin}
      url="http://linkendin.com/jaketrent"
      alt="First slide"
      roundedCircle
    />
    <img 
      className="h-100 mw-150 ml-2"
      width={40}
      src={git}
      url="http://linkendin.com/jaketrent"
      alt="First slide"
      roundedCircle
    />
    </Col>
    </Row>
</Jumbotron>
       
    )
}
export default Footer1;
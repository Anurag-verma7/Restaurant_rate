import React from 'react';
import {Jumbotron,Container,Row,Col} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
const Footer1 = () =>{
    return(
       
  <Jumbotron fluid>
  <Container>
  <Row>
    <Col xs={6} className="text-center"><h3>Team:</h3>
      <p>Anurag</p><p>Aneesha</p><p>Dishant</p><p>Rishita</p></Col>
    <Col xs={6} className="text-center"><h3>Connect us:</h3>
    <SocialIcon url="http://linkendin.com/jaketrent" /><SocialIcon url="http://githuc.com/jaketrent" /><SocialIcon url="http://facebook.com/jaketrent" /><SocialIcon url="http://instagram.com/jaketrent" /></Col>
  </Row>
  </Container>
</Jumbotron>
       
    )
}
export default Footer1;
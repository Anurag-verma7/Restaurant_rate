import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import junko from '../junk-food.jpg'
import pastaa from '../pasta.jpg'
import sweet from '../sweets.jpg'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Badge from 'react-bootstrap/Badge';
import { Form, FormControl, Button ,Row,Col,InputGroup, Container } from 'react-bootstrap';
import './Search.css'
import {Link} from 'react-router-dom'
import './Card.css'
const Home = () =>{
    return(
      <div>

  <Carousel>
  <Carousel.Item>
    <img 
      className="h-100 w-100"
      src={junko}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="h-100 w-100"
      src={pastaa}
      alt="Second slide"
    />

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="h-100 w-100"
      src={sweet}
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
 <Container className="center">
 <InputGroup className="mb-3" >
 <FormControl className="white-text"
   placeholder="search location"
 />
 <InputGroup.Append>
 <Link to ="/restaurant"><Button variant="outline-orange" className="search">search</Button></Link>
  
 </InputGroup.Append>
</InputGroup>
</Container>
<CardDeck>
  <Card className="one">
    
    <Card.Body>
      <Card.Title>Most searched</Card.Title>
      <Card.Text>
        Bangalore
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="one">
    
    <Card.Body>
      <Card.Title>Use coupon code<Badge className="badge" variant="light">CSPPL</Badge> </Card.Title>
      <Card.Text>
        To get 50% off in Oven Story
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="one">
    <Card.Body>
      <Card.Title>Total Views</Card.Title>
      <Card.Text>
        <h2>2</h2>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</div>
  
      
    )      
}
export default Home;
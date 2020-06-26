import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Badge from 'react-bootstrap/Badge';
const Cards = () =>{
    return(
<CardDeck>
  <Card>
    
    <Card.Body>
      <Card.Title>Most searched</Card.Title>
      <Card.Text>
        Bangalore
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Use coupon code <Badge variant="secondary">CSPPL</Badge> </Card.Title>
      <Card.Text>
        To get 50% off in Oven Story
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Total Views</Card.Title>
      <Card.Text>
        <h2>2</h2>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
    )
}
export default Cards
import React from 'react';
import {Link} from 'react-router-dom'
import { Form,FormControl,InputGroup,Button,Row,Col,Modal,Jumbotron } from 'react-bootstrap';
import './Signup.css'
const Reg = () =>{
    return(
        <div>
            <Jumbotron className="reg" style={{backgroundColor:'white'}}>
            <Form>
            <Form.Group as={Row}>

    <Form.Label column sm="2">
      Full Name:
    </Form.Label>
    <Col sm="10">
    <InputGroup >
  <FormControl type="text" placeholder="First Name"/>
  <FormControl type="text" placeholder="Last Name"/>
</InputGroup>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm="2">
      Email ID:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="username@gmail.com" />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm="2">
      Password:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Form.Label column sm="2">
      Confirm Password:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <Link to="/">
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button className="regbt" type="submit">Register</Button>
    </Col>
  </Form.Group>
  </Link>
</Form>
</Jumbotron>
        </div>

    )
}
export default Reg
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,FormControl,Button,Row,Col,InputGroup, Container } from 'react-bootstrap';
import './Search.css'
const Search1 = () =>{
  return(
    <Container className="center">
    <InputGroup className="mb-3" >
    <FormControl className="white-text"
      placeholder="search location"
    />
    <InputGroup.Append>
      <Button variant="outline-orange" className="search">Search</Button>
    </InputGroup.Append>
  </InputGroup>
  </Container>
  )}
export default Search1;
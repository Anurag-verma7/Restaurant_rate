import React from 'react';
import Restaurant from './restaurant'
import { BrowserRouter } from 'react-router-dom'
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,FormControl,Button,Row,Col,InputGroup, Container } from 'react-bootstrap';
import './Search.css'
import {Link} from 'react-router-dom'
const Search1 = () =>{
  return(
    <Container className="center">
    <InputGroup className="mb-3" >
    <FormControl className="white-text"
      placeholder="search location"
    />
    <InputGroup.Append>
      <Button variant="outline-orange" className="search"><Link to ="/restaurant">search</Link></Button>
     
    </InputGroup.Append>
  </InputGroup>
  </Container>
  )}
export default Search1;
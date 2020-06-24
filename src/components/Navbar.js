import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,FormControl,Button,Nav,NavDropdown,Navbar } from 'react-bootstrap';
const Navbar1 = () =>{
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">hamara app</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#">login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        signup
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
export default Navbar1
/*
const Navbar = () =>{
    return(
        <nav className="nav-wrapper red-darken-3">
            <div className="container">
                <a className="brand-logo">restaurant_rate</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}
export default Navbar
*/


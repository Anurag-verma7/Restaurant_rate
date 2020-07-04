import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,FormControl,Button,Nav,NavDropdown,Navbar,Row,Col,Modal } from 'react-bootstrap';
const Navbar1 = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <div className="shadow-box-example hoverable z-depth-5" style={{height: "50px", width: "100%", backgroundColor: "#64b5f6"}}>
    <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark" >
    <Link to="/">
      <Navbar.Brand >
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Khaana Khazaana
      
    </Navbar.Brand>
    </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#" onClick={handleShow}>Login</Nav.Link>
      <Nav.Link href="./Signup">Signup</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

<Modal show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group as={Row}>
    <Form.Label column sm="2">
      Email:
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder="username@gmail.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} >
    <Form.Label column sm="2">
      Password:
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Login
          </Button>
          <Link to="/Signup">
          <Button variant="primary" onClick={handleClose}>
            Register
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
</div>
  )
}
export default Navbar1

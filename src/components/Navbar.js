import React,{useState ,useEffect} from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,FormControl,Button,Nav,NavDropdown,Navbar,Modal } from 'react-bootstrap';
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
      <Nav.Link href="#">Login</Nav.Link>
      <Nav.Link href="#" onClick={handleShow}>Signup</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>yaha signup kare!!!!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            signup
          </Button>
        </Modal.Footer>
      </Modal>
</div>
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


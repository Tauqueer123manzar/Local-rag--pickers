import Container from 'react-bootstrap/Container';;
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../App.css'
const Header = () => {
  return (
    <Navbar expand="lg" className='p-2' style={{backgroundColor:"lightgray"}}>
      <Container fluid>
        <Navbar.Brand href="/home" style={{marginLeft:"20px",color:"red",fontWeight:"800"}}>RAGPICKERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-3 my-lg-0 navbar"
            style={{ maxHeight: '100%',fontSize:"18px"}}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/about">ABOUT</Nav.Link>
            <Nav.Link as={NavLink} to="/ragpickers">RAGPICKERS</Nav.Link>
            <Nav.Link as={NavLink} to="/services">SERVICES</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header

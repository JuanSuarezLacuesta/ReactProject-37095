import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

import"./NavBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant='dark' className='NavBackground  '>
      <Container>
        <Navbar.Toggle className='NavbarToggle this' aria-controls="responsive-navbar-nav" />
        
        <Navbar.Brand><NavLink to='/#home' className='NavText '>movieGate</NavLink></Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto ">
            <Nav.Link><NavLink to='/category/drinks' className='NavText'>Drinks</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/category/combs' className='NavText'>Combs</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/category/snacks' className='NavText'>Snacks</NavLink></Nav.Link>
          </Nav>

        </Navbar.Collapse>
          <Nav>
          <NavLink to='/cart' className='NavText'><CartWidget/></NavLink>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  const logoStyle = {
    color: '#771234',
    fontSize: '25px',
    
  };

  return (
    <Navbar className="navEstilo"  expand="lg">
      <Navbar.Brand href="/" className='logo' style={logoStyle}>
        <img src="/Imagenes/logo.PNG" alt="Flor de Liz" width="80" height="70" />
        Flor de Liz
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end login">
        <Nav>
          <Nav.Link href="/login">
            Login
            <img src="/Imagenes/login.PNG" alt="Login" width="50" height="50"/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink ,Link} from 'react-router-dom';

const Footer = () => {
  

  return (
    <Container fluid  className='footerEstilo'>
      <Row>
        <Col lg={3} md={12} style={{ marginLeft: '5%' }}>
          <Navbar  expand="lg">
            <Navbar.Brand className='footerInfo' >
            <NavLink className={({isActive})=>isActive?'active':""} to="/nosotros">
              <h4>NOSOTROS</h4>
            </NavLink>
              <p>Floristería Flor de Lis está ubicada <br></br>en Capital Federal, Buenos Aires.</p>
            </Navbar.Brand>
          </Navbar>
        </Col>

        <Col lg={3} md={12} style={{ marginLeft: '5%' }}>
            <Navbar className="footerNav ml-lg-auto" expand="lg">
                <Navbar.Collapse>
                <Nav className="ml-auto">
                    <div>
                        <h4>INFORMACIÓN</h4>
                        <a href="#">Aviso Legal</a>
                        <NavLink className={({isActive})=>isActive?'active':""} to="/contacto">Contacto</NavLink>
                        <a href="#">Condiciones</a>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
         </Col>


        <Col lg={3} md={12} style={{ marginLeft: '5%' }}>
          <Navbar expand="lg">
            <Nav className="ml-auto">
                <div>
                    <h4>REDES SOCIALES </h4>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      
                      <Link to="www.facebook.com" style={{ marginRight: '15px' }}><img src="/Imagenes/facebook.png" alt="Facebook" width="30" height="30" /></Link>
                      <Link to="wwww.twitter.com" style={{ marginRight: '15px' }}><img src="/Imagenes/x.png" alt="Twitter" width="30" height="30" /></Link>
                      <Link to="www.instagram.com" style={{ marginRight: '15px' }}><img src="/Imagenes/insta.png" alt="Instagram" width="30" height="30" /></Link>
                    </div>
                </div>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

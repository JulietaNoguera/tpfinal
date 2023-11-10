import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  

  return (
    <Container fluid  className='footerEstilo'>
      <Row>
        <Col lg={3} md={12} style={{ marginLeft: '5%' }}>
          <Navbar  expand="lg">
            <Navbar.Brand className='footerInfo' >
              <h4>SOBRE NOSOTROS</h4>
              <p>Floristería Flor de Lis está ubicada <br></br>en Capital Federal, Buenos Aires.</p>
              <p>Nuestro horario de envíos es de <br></br>Lunes a Viernes de 10:00 - 14:00<br></br> y 17:30 - 20:30.
              <br></br> Sábados de 10:00 - 13:30.</p>
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
                        <a href="#">Contacto</a>
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
                      <a href="#" style={{ marginRight: '10px' }}><img src="/Imagenes/facebook.png" alt="Facebook" width="20" height="20" /></a>
                      <a href="#" style={{ marginRight: '10px' }}><img src="/Imagenes/x.png" alt="Twitter" width="20" height="20" /></a>
                      <a href="#" style={{ marginRight: '10px' }}><img src="/Imagenes/insta.png" alt="Instagram" width="22" height="22" /></a>
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

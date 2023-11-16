import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const Login = () => {
  return (
    <div className='contenedorLog'>
      <div className='contenedorClaro'>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
          <h2>Contacto</h2>
          <p>Envianos tu consulta o sugerencia</p>
            <Form>
              <Form.Group className="mb-3" controlId="formHorizontalEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" placeholder="Escrite tu nombre " />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formHorizontalEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Escrite tu email " />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
              <Form.Group>
                <Button type="submit">Enviar</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;


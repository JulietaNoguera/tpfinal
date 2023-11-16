import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const Login = () => {
  return (
    <div className='contenedorLog'>
      <div className='contenedorClaro'>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
          <h2>Ingresar</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formHorizontalEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formHorizontalPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formHorizontalCheck">
                <Form.Check label="Recordar" />
              </Form.Group>

              <Form.Group>
                <Button type="submit">Login</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;


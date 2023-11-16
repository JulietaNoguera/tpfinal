import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const Login = () => {
  return (
    <div className='contenedorLog'>
      <div className='contenedorClaro'>
       <h2> Sobre nosotros</h2>

       <h5>1. Compartir la historia de por qué se fundó la empresa</h5>

       <p> Esta es tu oportunidad de centrarte en el «por qué» de tu empresa Podría ser lo que te diferencia de otros competidores en el mercado.

        Comparte el momento en que obtuviste la inspiración para tu empresa y lo que te motivó a ponerla en marcha.</p>

        <h5>2. Destaca tu trayectoria y el papel de tu equipo fundador</h5>

        <p>¿Quién eres? ¿Por qué eres la persona adecuada para dirigir tu empresa en este momento? Comparte tu historial y tu historia personal. Eso te conectará con tus clientes.</p>

        <h5>3. Documenta la evolución de la empresa</h5>

        <p>Expón todo, desde los obstáculos hasta las mejoras del producto. Pon al día a tus nuevos clientes. ¿Dónde está la empresa hoy? ¿En qué se diferencia de donde estaba antes?</p>

        <h5>4. Documenta la misión y la visión</h5>

        <p>¿Qué intenta resolver tu empresa? ¿Hacia dónde se dirige? Termina la página sobre nosotros detallando los pasos que estás dando para transformar la empresa en tu visión final.</p>
      </div>
    </div>
  );
};

export default Login;
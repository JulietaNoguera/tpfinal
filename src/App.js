import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navegador from'./Vista/Globales/Nav'
import Footer from './Vista/Globales/Footer'
import Login from './Vista/Globales/Login';
import Nosotros from './Vista/Globales/Nosotros';
import Contacto from './Vista/Globales/Contacto';


function App() {
  return (
    <>
      <Navegador></Navegador>
      <Login></Login>
      <Nosotros></Nosotros>
      <Contacto></Contacto> 
      <Footer></Footer>
    </>
  );
}

export default App;

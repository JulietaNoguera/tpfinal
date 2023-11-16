import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navegador from'./Vista/Globales/Nav'
import Footer from './Vista/Globales/Footer'
import Login from './Vista/Globales/Login';
import Nosotros from './Vista/Globales/Nosotros';
import Contacto from './Vista/Globales/Contacto';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navegador></Navegador>
          <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/nosotros' element={<Nosotros/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;

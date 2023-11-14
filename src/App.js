import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navegador from'./Vista/Globales/Nav'
import Footer from './Vista/Globales/Footer'
import Login from './Vista/Globales/Login';

function App() {
  return (
    <>
      <Navegador></Navegador>
      <Login></Login>
      <Footer></Footer>
    </>
  );
}

export default App;

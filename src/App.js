import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Componentes/Footer';
import Servicios from './Componentes/servicios/servicios';
import Proyectos from './Componentes/proyectos/proyectos';
import Contacto from './Componentes/contacto/contacto';

import { Home } from "./Componentes/Home";
import NavbarH from './Componentes/Navbar';
import ScrollToTop from "react-scroll-to-top";
import { Skills } from "./Componentes/Skills";


function App() {
  return (
    <div className="App">
      <NavbarH />
      <ScrollToTop smooth color="#000" />
      <body  className="App-body">
        <Home />
        <Skills /><br></br>
        <Servicios />
        <Proyectos />
        <Contacto />
        <Footer />
      </body>
    </div>
  );
}

export default App;

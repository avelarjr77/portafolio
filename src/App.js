import logo from './logo.svg';
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Componentes/Footer';
import SobreMi from './Componentes/sobreMi/sobreMi';
import Servicios from './Componentes/servicios/servicios';
import Experiencia from './Componentes/experiencia/experiencia';
import Proyectos from './Componentes/proyectos/proyectos';
import Contacto from './Componentes/contacto/contacto';

import { Home } from "./Componentes/Home";
import NavbarH from './Componentes/Navbar';
import Button from 'react-bootstrap/Button';
import ScrollToTop from "react-scroll-to-top";
import { Skills } from "./Componentes/Skills";

import './firebase';


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

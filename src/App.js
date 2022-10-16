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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


function App() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA848g8FB_rxMw2XCi3NK1z3fWOKv5zlbE",
    authDomain: "avelarjr77-1f680.firebaseapp.com",
    projectId: "avelarjr77-1f680",
    storageBucket: "avelarjr77-1f680.appspot.com",
    messagingSenderId: "971675156550",
    appId: "1:971675156550:web:7a58c9fe8b8d811e3dca47",
    measurementId: "G-0TRPSWE10X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <div className="App">
      <NavbarH />
      <ScrollToTop smooth color="#000" />
      <body className="App-body">
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

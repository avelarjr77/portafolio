import React from 'react';
import './servicios.css';

export default function servicios() {
    return (
        <section id='servicios'>
            <br></br>
            <h2>Servicios</h2>
            <br></br>
            <div className="container servicios">
                <div className='diseño__Web'>
                    <h4>Desarrollo Web</h4>
                    <hr></hr>
                    <br></br>
                    <div className='web_contenido'>
                        <article className='article'>
                            <h5>Web responsive</h5>
                            <small className='text-light text-small'>
                                <li>Diseño por plantilla</li>
                                <li>Bootstrap 5</li>
                                <li>Contenido. 5 Páginas</li>
                            </small>
                        </article>
                        <article className='article'>
                            <h5>Dahsboard</h5>
                            <small className='text-light text-small'>
                                <li>Diseño por plantilla</li>
                                <li>Contenido. 10 Páginas</li>
                                <li>Responsive</li>
                                <li>CRUD</li>
                                <li>Bootstrap 5</li>
                                <li><b>Framework:</b> CodeIgniter 4</li>
                                <li><b>Base de datos:</b> MySql</li>
                                <li><b>Arquitectura:</b> MVC</li>
                            </small>
                        </article>
                        <article className='article'>
                            <h5>Diseño personalizado Dashboard</h5>
                            <small className='text-light text-small'>
                                <li>Diseño por plantilla</li>
                                <li>Contenido. 10+ Páginas</li>
                                <li>Responsive</li>
                                <li>CRUD</li>
                                <li>Login</li>
                                <li>Bootstrap 5</li>
                                <li><b>Frameworks o Librerías:</b>
                                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp; CodeIgniter 4 / React / Angular
                                </li>
                                <li><b>Base de datos:</b> MySql</li>
                                <li><b>Arquitectura:</b> MVC</li>
                                <li><b>Servidor:</b> Dominio + Hosting</li>
                            </small>
                        </article>
                        <br></br>
                    </div>
                    <a type='button' className='btn btn-outline-light btn-lg' href='#contacto'>Cotizar</a>
                </div>
            </div>
            <br></br>
            <br></br>
        </section>
    )
}
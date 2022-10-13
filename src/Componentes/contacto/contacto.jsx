import React from 'react';
import contacto from './contacto.css';

export default function Contacto() {
    return (
        <section id='contacto'>
            <div className="container contacto">
            <br></br>
            <h2>Contáctame</h2>
            <h5>¿Cómo puedo ayudarte?</h5>
            <br></br>
                <div className="container opciones ">
                    <form>
                        <input type="text" name="nombre" placeholder='Ingrese su nombre completo' minLength={12} maxLength={125} required></input>
                        <input type="email" name="correo" placeholder='Ingrese su correo' required></input>
                        <textarea name="mensaje" rows="7" placeholder='Escriba un mensaje' minLength={20} maxLength={125} required></textarea>
                        <button type='submit' className='btn btn-outline-light btn-lg'>Enviar mensaje</button>
                    </form>
                </div>
                <br></br>

            </div>
            <br></br>
            <br></br>
        </section>
    )
}
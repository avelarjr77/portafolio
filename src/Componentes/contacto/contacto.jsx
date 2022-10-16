
import React, { useRef } from 'react';
import './contacto.css';
import emailjs from '@emailjs/browser';

export default function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sftix3c', 'template_4ewl1wl', form.current, 'KKVlTVw_lWou1fF3D')
        .then((result) => {
            alert("¡Se ha enviado tu mensaje!");
            window.location.reload();;
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <section id='contacto'>
            <div className="container contacto">
                <br></br>
                <h2>Contáctame</h2>
                <h5>¿Cómo puedo ayudarte?</h5>
                <br></br>
                <div className="container opciones ">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="nombre" placeholder='Ingrese su nombre completo' minLength={12} maxLength={125} required></input>
                        <input type="email" name="correo" placeholder='Ingrese su correo' required></input>
                        <textarea name="mensaje" rows="7" placeholder='Escriba un mensaje' minLength={20} maxLength={125} required></textarea>
                        <button className='btn btn-outline-light btn-lg'>Enviar mensaje</button>
                    </form>
                </div>
                <br></br>

            </div>
            <br></br>
            <br></br>
        </section>
    )
}
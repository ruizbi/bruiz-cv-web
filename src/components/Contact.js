import React, { useRef } from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';

export const Contact = () => {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8bykxqv', 'template_4lc73d8', form.current, 'user_JOTwOMbU03ajegbdBjcJX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        document.getElementById("Contact_form").reset();
    };

    return (
        <div className="Contact">
            <div className="Contact-wave">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="Header-wave-svg">
                    <path d="M-28.78,89.30 C208.23,149.50 413.09,-44.89 512.97,106.08 L500.00,0.00 L0.00,0.00 Z" className="Header-wave-path"></path>
                </svg>
            </div>
            <div className="Contact-container">
                <h2 className="Contact-titulo">Contacto</h2>
                <div className="Contact-formulario">
                    <div className="img_svg"></div>
                    <form ref={form} onSubmit={sendEmail} id="Contact_form">
                        <div className="Contact-formulario-inputs">
                            <input type="text" placeholder="Nombre" autoComplete="off" name="name" required></input>
                            <input type="text" placeholder="Asunto" autoComplete="off" name="subject" required></input>
                            <input type="email" placeholder="Email" autoComplete="off" name="email" required></input>
                        </div>
                        <textarea placeholder="Mensaje" name="message" required></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

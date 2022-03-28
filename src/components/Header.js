import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <header className="Header">
            <div className="Header-wave" >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="Header-wave-svg">
                    <path d="M-28.78,89.30 C208.23,149.50 413.09,-44.89 512.97,106.08 L500.00,0.00 L0.00,0.00 Z" className="Header-wave-path">
                    </path>
                </svg>
            </div>
            <div className="Header-container">
                <div className="Header-info">
                    <span>Hola! Me llamo</span>
                    <h1>Bruno Ruiz</h1>
                    <h2>Desarrollador Web</h2>
                    <p>Soy desarrollador web con conocimiento en el stack MERN. A su vez, me interesan las áreas de Seguridad informática y la Inteligencia artificial. Busco mi primera oportunidad en IT para poder desarrollarme como profesional.</p>
                    <div className="Header-contenedor-links">
                        <a href="https://www.linkedin.com/in/ruizbi/"  target="_blank">LinkedIn</a>
                        <a href="https://github.com/ruizbi" target="_blank">Github</a>
                    </div>
                </div>
                <div className="Header-wrapper">
                        <div className="Header-wrapper-form"></div>
                </div>
            </div>
        </header>
    )
}

import React from 'react'
import {FaCode, FaNodeJs} from 'react-icons/fa'
import {MdOutlineStorage, MdSettings} from 'react-icons/md'

import './Skills.css'

export const Skills = () => {

    return (
        <div className="Skills">
            <h2>Habilidades técnicas</h2>
            <div className="Skills-contenedor-tarjetas">
                <div className="Skills-tarjeta">
                    <FaCode className="Skills-icono"/>
                    <h3>Front-end</h3>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React.JS</span>
                </div>
                <div className="Skills-tarjeta">
                    <FaNodeJs className="Skills-icono"/>
                    <h3>Back-end</h3>
                    <span>Node.JS</span>
                    <span>Express.JS</span>
                </div>
                <div className="Skills-tarjeta">
                    <MdOutlineStorage className="Skills-icono"/>
                    <h3>Base de datos</h3>
                    <span>MySQL</span>
                    <span>PL/SQL</span>
                    <span>MongoDB</span>
                </div>
                <div className="Skills-tarjeta">
                    <MdSettings className="Skills-icono"/>
                    <h3>Otras habilidades</h3>
                    <span>C/C++</span>
                    <span>Github</span>
                    <span>UML</span>
                </div>
            </div>
        </div>
    )
}

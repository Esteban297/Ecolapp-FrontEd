import React from 'react';
import logo from "./img/img.png";
import {Link} from "react-router-dom";
import'./css/help.css'

const Help = () => {
    return (
        <div className="home-container">
            <div className="header">
                <img src={logo} alt="Logo de la empresa" style={{ width: '10%', height: '50%' }} />
                <Link to="/home" className="home-link">Home</Link>
                <Link to="/points" className="profile-link">Points</Link>
                <Link to="/help" className="help-link">Help</Link>
                <Link to="/profile" className="profile-link">Profile</Link>
            </div>
            <div className='cont'>
                <div className='cont-texto-1'>
                    <h1>Sobre Nosotros</h1>
                    <h3 >¿Como funcionamos?</h3>
                    <hr />
                    <p >
                        Recibe recompensas por reciclar mientras contribuyes al medio ambiente y ganas puntos canjeables.
                        <br />
                    </p>
                    <ul >
                        <h4>Como funciona:</h4>
                        <br />
                        <li>Descargas la aplicación</li>
                        <li>Te registras y accedes a la aplicación</li>
                        <li>En nuestra pagina Home, podemos ver los puntos que tengamos</li>
                        <li>Aquí podemos solicitar la visita de un recolector</li>
                        <li>Por reciclar obtendras puntos, los cuales puede canjear por increibles premios</li>
                        <h4 > Puntos:</h4>
                        <br />
                        <li>1 Kilo de Botellas de plastico: 10 puntos</li>
                        <li>1 Kilo de Papel Blanco: 1 puntos</li>
                        <li>1 Kilo de Carton: 2 puntos</li>
                        <li>1 Kilo de Tetrapak: 2 puntos</li>
                        <li>1 Kilo de Aluminio: 8 puntos</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Help;

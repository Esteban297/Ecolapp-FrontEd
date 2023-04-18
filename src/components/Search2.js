import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';
import logo from './img/img.png';
import reco from './img/img4.png';



const Home = () => {
    return (
        <div className="home-container">
            <div className="header">
                <img src={logo} alt="Logo de la empresa" style={{ width: '10%', height: '50%' }} />
                <Link to="/home" className="home-link">Home</Link>
                <Link to="/points" className="profile-link">Points</Link>
                <Link to="/help" className="help-link">Help</Link>
                <Link to="/profile" className="profile-link">Profile</Link>
            </div>
            <div className="message">
                <p>Gracias por tu ayuda, Miguel, uno de nuestros recolectores está en camino y llegará pronto a tu casa.</p>
                <img src={reco} alt="Logo de la empresa" style={{ width: '20%', height: '50%' }} />
            </div>
        </div>
    );
}

export default Home;

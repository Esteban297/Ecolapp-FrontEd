import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from './img/img.png'; // Ruta relativa a la imagen


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
            <h1>Welcome to my website</h1>
        </div>
    );
}

export default Home;

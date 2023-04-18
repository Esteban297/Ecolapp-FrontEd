import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./img/img.png";
import foto from "./img/img1.png"

const Search = () => {
    return (
        <div className="home-container">
            <div className="header">
                <img src={logo} alt="Logo de la empresa" style={{ width: '10%', height: '50%' }} />
                <Link to="/home" className="home-link">Home</Link>
                <Link to="/points" className="profile-link">Points</Link>
                <Link to="/help" className="help-link">Help</Link>
                <Link to="/profile" className="profile-link">Profile</Link>
            </div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', opacity: 0.9, position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <img src={foto} alt="Imagen" style={{ width: '58%', height: 'auto', position: 'absolute', top: '-100px', left: 50 }} />
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <input style={{ marginBottom: '10px' }} type="text" placeholder="Dirección" />
                    <input style={{ marginBottom: '10px' }} type="text" placeholder="Barrio" />
                    <input style={{ marginBottom: '10px' }} type="text" placeholder="Información adicional" />
                    <input style={{ marginBottom: '10px' }} type="number" placeholder="Botellas" />
                    <input style={{ marginBottom: '10px' }} type="number" placeholder="Papel" />
                    <input style={{ marginBottom: '10px' }} type="number" placeholder="Latas" />
                    <input style={{ marginBottom: '10px' }} type="number" placeholder="Tapas" />
                    <Link to="/search2"><button type="submit">Solicitar</button></Link>
                </form>
            </div>
        </div>
    );
}


export default Search;

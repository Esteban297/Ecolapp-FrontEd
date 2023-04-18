import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";

function Profile() {

 

  return (
    <div className="Profile">
      <div className="Profile-header">
        <img
          src="https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg?w=2000"
          alt="Profile"
          className="Profile-picture"
        />
        <h1 className="Profile-name">John Hernandez</h1>
        <p className="Profile-points">500 Puntos</p>
        <Link to="/Points">Redimir Puntos</Link>
      </div>
    </div>
  );
}

export default Profile;


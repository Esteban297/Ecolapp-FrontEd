import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="header">
                <Link to="/home" className="home-link">Home</Link>
                <Link to="/help" className="help-link">Help</Link>
                <Link to="/profile" className="profile-link">Profile</Link>
            </div>
            <h1>Welcome to my website</h1>
        </div>
    );
}

export default Home;

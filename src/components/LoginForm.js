import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');

        if (!username || !password) {
            const error = document.createElement('span');
            error.className = 'error';
            error.textContent = 'Por favor, complete todos los campos.';
            event.target.appendChild(error);
            return;
        }
    }

    return (
        <div className="login-form-container">
            <div className="login-form-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <Link to="/home">
                        <button type="submit" className="btn btn-primary">Login</button>
                        <span className="error">{error}</span>
                    </Link>

                </form>
            </div>
        </div>
    );
}

export default LoginForm;

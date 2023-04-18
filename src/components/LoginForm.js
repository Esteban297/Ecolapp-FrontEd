import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: enviar credenciales al servidor
    };

    return (
        <div className="login-form-container">
            <div className="login-form-box">
                <h2>Login</h2>
                <form>
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
                    </Link>

                </form>
            </div>
        </div>
    );
}

export default LoginForm;

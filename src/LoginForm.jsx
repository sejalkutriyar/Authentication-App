import React, { useState } from 'react';
import './App.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Both fields are required.');
      setIsLoggedIn(false);
    } else if (username === 'admin' && password === 'password') {
      setError('');
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password.');
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      <div className="login-message">
        {error && <p className="error-message">{error}</p>}
        {isLoggedIn && <p className="success-message">Login successful!</p>}
      </div>
    </div>
  );
};

export default LoginForm;
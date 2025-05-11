import React from 'react';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  return (
    <div id="root">
      <div className="app-container">
        <h1 className="app-title">Welcome to Authentication App</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
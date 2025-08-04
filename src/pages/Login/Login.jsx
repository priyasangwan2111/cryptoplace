import './Login.css';  
// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if user exists and password matches
    const user = registeredUsers.find(user => user.email === email && user.password === password);
    if (!user) {
      alert('Invalid credentials or user not registered');
      return;
    }
    alert('Login successful!');
    // For demo, you could redirect to home or dashboard
    navigate('/');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          required 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          required 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <button type="submit">Log In</button>
      </form>
      <p>New user? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
};

export default Login;

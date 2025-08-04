import './SignUp.css';
// src/pages/SignUp/SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Dummy "registered users" stored in localStorage for demo
  const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email already registered
    const userExists = registeredUsers.find(user => user.email === email);
    if (userExists) {
      alert('User already registered. Please login.');
      navigate('/login');
      return;
    }
    // Save new user (just email & password for demo)
    localStorage.setItem('users', JSON.stringify([...registeredUsers, { email, password }]));
    alert('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
      </form>
      <p>Already registered? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default SignUp;

/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login({ name: username, email: email });
    navigate('/user')
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <br />
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email ..."
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

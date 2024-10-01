import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import User from './components/User';
import { UserProvider } from './context/UserContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate('/login')}>login</button>
    </>
  );
};
const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </UserProvider>
  );
};

export default App;

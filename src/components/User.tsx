/* eslint-disable prettier/prettier */
import React from 'react';
import { useUser } from '../context/UserContext';

const User = () => {
    const { authenticated, user, logout } = useUser();

    if (!authenticated) {
        return <p>You are not authorized. Please log in.</p>;
    }

    return (
        <div>
            <h1>Welcome, {user?.name}</h1>
            <p>Email: {user?.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default User;

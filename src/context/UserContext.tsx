/* eslint-disable prettier/prettier */

import React, { createContext, useState, ReactNode, useContext } from 'react';

interface UserContextType {
  authenticated: boolean;
  user: {
    name: string,
    email: string
  } | null;
  login: (user: UserContextType['user']) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserContextType['user'] | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  const login = (user: UserContextType['user']) => {
    setUser(user);
    setAuthenticated(true)
  };

  const logout = () => {
    setUser(null);
    window.location.href = '/login';
  };


  return (
    <UserContext.Provider value={{ authenticated, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

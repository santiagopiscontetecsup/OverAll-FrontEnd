import React, { createContext, useContext, useState } from 'react';
import { users } from '../data/dataUser/userData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password, companyName) => {
    const user = users.find(user => user.email === email && user.password === password && user.companyName === companyName);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

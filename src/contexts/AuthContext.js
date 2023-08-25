import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export function AuthProvider({children}) {
  const BASE_URL = 'http://3.39.93.174:8000/';

  return (
    <AuthContext.Provider value={{BASE_URL}}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

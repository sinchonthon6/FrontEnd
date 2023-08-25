import React, {createContext, useContext} from 'react';

const AuthContext = createContext();

export function AuthProvider({children}) {
  const authToken = 'null';
  const BASE_URL = 'http://3.39.93.174:8000/';

  return (
    <AuthContext.Provider value={{BASE_URL, authToken}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

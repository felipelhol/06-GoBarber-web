import React, { createContext, useCallback } from 'react';

interface AuthContextState {
  name: string;
  signIn(): void;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('sign in');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Felipe', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

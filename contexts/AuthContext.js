import Router from 'next/router';
import { createContext, useState, useEffect } from 'react';
import { firebaseAuth, GoogleAuthProvider, getRedirectResult, signInWithPopup } from '@/lib/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const provider = new GoogleAuthProvider();

  const signin = () => {
    try {
      setLoading(true);
      signInWithPopup(firebaseAuth, provider)
        .then((result) => {
          setUser(result.user);
          Router.push('/dashboard');
        });
    } finally {
      setLoading(false);
    }
  };

  const signout = () => {
    try {
      auth.signOut()
        .then(() => {
          Router.push('/');
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;

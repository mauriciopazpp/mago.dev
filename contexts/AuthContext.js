import Router from 'next/router';
import { createContext, useState, useEffect } from 'react';
import firebase from '@/lib/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  const signin = () => {
    try {
      setLoading(true);
      auth.signInWithPopup(provider)
        .then(() => {
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

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    })
  }, []);

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

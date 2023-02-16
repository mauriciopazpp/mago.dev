import Router from 'next/router';
import { createContext, useState, useMemo, useEffect } from 'react';
import {
  firebaseAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from '@/lib/firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (data) => {
      setUser(data);
    });
  }, []);

  const signin = () => {
    try {
      setLoading(true);
      signInWithPopup(firebaseAuth, provider).then((result) => {
        Router.push('/dashboard');
        setUser(result.user);
      });
    } finally {
      setLoading(false);
    }
  };

  const signout = () => {
    try {
      firebaseAuth.signOut().then(() => {
        Router.push('/');
        setUser(null);
      });
    } finally {
      setLoading(false);
    }
  };

  const data = useMemo(
    () => ({
      user,
      loading,
      signin,
      signout,
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;

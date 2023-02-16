import Router from 'next/router';
import { createContext, useState, useMemo } from 'react';
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

  const signin = () => {
    try {
      setLoading(true);
      signInWithPopup(firebaseAuth, provider).then((result) => {
        setUser(result.user);
        Router.push('/dashboard');
      });
    } finally {
      setLoading(false);
    }
  };

  const signout = () => {
    try {
      firebaseAuth.signOut().then(() => {
        Router.push('/');
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

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

  const setUserAndLoading = (userData, isLoading) => {
    setUser(userData);
    setLoading(isLoading);
  };

  const signin = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(firebaseAuth, provider);
      Router.push('/dashboard');
      setUserAndLoading(result.user, false);
    } catch (error) {
      setUserAndLoading(null, false);
      throw new Error(error);
    }
  };

  const signout = async () => {
    try {
      await firebaseAuth.signOut();
      Router.push('/');
      setUserAndLoading(null, false);
    } catch (error) {
      setUserAndLoading(user, false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(async (data) => {
      setUserAndLoading(data, false);
    });

    return () => unsubscribe();
  }, []);

  const data = useMemo(
    () => ({ user, loading, signin, signout }),
    [user, loading],
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;

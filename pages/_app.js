import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { AuthProvider } from '@/contexts/AuthContext';
import { useEffect } from "react";
import '@/styles/styles.scss'

function GlobalStyle({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

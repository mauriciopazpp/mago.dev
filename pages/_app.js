import React, { useEffect } from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/styles.scss';

function GlobalStyle({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
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

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default React.memo(App);

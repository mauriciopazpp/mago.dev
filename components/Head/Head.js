import React from 'react';
import { Head as HeadNext } from 'next/document';

function CustomHead() {
  return (
    <HeadNext>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="Explore our collection of exclusive tutorials, tailored for programmers eager for knowledge. Learn from the best and take your development skills to the next level."
      />
      <meta
        property="og:description"
        content="Explore our collection of exclusive tutorials, tailored for programmers eager for knowledge. Learn from the best and take your development skills to the next level."
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:description"
        content="Explore our collection of exclusive tutorials, tailored for programmers eager for knowledge. Learn from the best and take your development skills to the next level."
      />
      <meta name="robots" content="index, follow" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200;300;400;600;700;800;900&display=swap"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200;300;400;600;700;800;900&display=swap"
        media="print"
        onLoad="this.media='all'"
      />
    </HeadNext>
  );
}

export default CustomHead;

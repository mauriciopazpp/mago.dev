import React, { useState, useEffect } from 'react';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';

function Layout({ children, className }) {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const resize = () => {
      setMobile(window.innerWidth <= 730);
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    document.title = 'Mago.dev';
  }, []);

  return (
    <div className={className}>
      <Topbar isMobile={isMobile} />
      <Sidebar isMobile={isMobile}>{children}</Sidebar>
    </div>
  );
}

export default React.memo(Layout);

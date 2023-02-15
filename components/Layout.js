import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import { useState, useEffect } from 'react';


function Layout({ children }) {
  const [isMobile, setMobile] = useState(false);
  
  const resize = () => {
    setMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    addEventListener('resize', resize);
    resize();
  });

  return (
      <>
        <Topbar isMobile={isMobile} />
        <Sidebar isMobile={isMobile}>
          {children}
        </Sidebar>
      </>
  );
}
export default Layout;

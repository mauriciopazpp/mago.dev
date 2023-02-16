import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import { useState, useEffect } from 'react';


function Layout({ children, className }) {
  const [isMobile, setMobile] = useState(false);
  
  const resize = () => {
    setMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    addEventListener('resize', resize);
    resize();
  });

  return (
      <div className={className}>
        <Topbar isMobile={isMobile} />
        <Sidebar isMobile={isMobile}>
          {children}
        </Sidebar>
      </div>
  );
}
export default Layout;

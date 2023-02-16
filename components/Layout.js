import { useState, useEffect } from 'react';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';

function Layout({ children, className }) {
  const [isMobile, setMobile] = useState(false);

  const resize = () => {
    setMobile(window.innerWidth <= 730);
  };

  useEffect(() => {
    addEventListener('resize', resize);
    resize();
    console.log('isMobile', isMobile);
  });

  return (
    <div className={className}>
      <Topbar isMobile={isMobile} />
      <Sidebar isMobile={isMobile}>{children}</Sidebar>
    </div>
  );
}
export default Layout;

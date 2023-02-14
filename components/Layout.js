import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';

function Layout({ children }) {
  return (
      <>
        <Topbar />
        <Sidebar>
          {children}
        </Sidebar>
      </>
  );
}
export default Layout;

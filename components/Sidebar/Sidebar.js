import { House, CodeSquare, PersonCircle } from 'react-bootstrap-icons';
import Image from 'next/image';
import useAuth from '@/hooks/useAuth';

const mauricioPaz =
  'https://lh3.googleusercontent.com/a/AEdFTp5b2KO3YULaB5_rHAjDJXKHhRDnhg-Fw1S1ndAHyw=s96-c';

function Sidebar({ children, isMobile }) {
  const { user } = useAuth();

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className={`${
            isMobile ? 'mago-sidebar-hide' : ''
          } mago-sidebar bg-dark col-auto col-md-3 col-xl-2`}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white-01 min-vh-100">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0 user">
                  <Image
                    src={user?.photoURL}
                    alt={user?.displayName}
                    width={40}
                    height={40}
                    className="rounded-circle d-inline-block align-text-top"
                  />
                  <span className="text-white-01 ms-1 d-sm-inline">
                    <div>
                      <b>{user?.displayName}</b>
                    </div>
                    <p>{user?.email}</p>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                  <House color="white" />{' '}
                  <span className="text-white-01 ms-1 d-sm-inline">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <CodeSquare color="white" />{' '}
                  <span className="text-white-01 ms-1 d-sm-inline">
                    My Curses
                  </span>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <a href="#" className="text-white-01 nav-link px-0">
                      {' '}
                      <span className="d-sm-inline">Item</span> 1{' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white-01 nav-link px-0">
                      {' '}
                      <span className="d-sm-inline">Item</span> 2{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <PersonCircle color="white" />{' '}
                  <span className="text-white-01 ms-1 d-sm-inline">Perfil</span>
                </a>
              </li>
              <li>
                <span className="mago-sidebar-subtitle">Instructors</span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/m-paz/"
                  className="nav-link align-middle px-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={mauricioPaz}
                    alt="Mauricio Paz"
                    width={30}
                    height={30}
                    className="rounded-circle d-inline-block align-text-top"
                  />
                  <span className="text-white-01 ms-1 d-sm-inline">
                    Mauricio Paz Pacheco
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mago-content col py-3">{children}</div>
      </div>
    </div>
  );
}

export default Sidebar;

import { House, CodeSquare, PersonCircle, List } from 'react-bootstrap-icons';

function Sidebar({ children, isMobile }) {

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className={`${isMobile ? 'mago-sidebar-hide': ''} mago-sidebar col-auto col-md-3 col-xl-2 bg-dark`}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <a href="#" className="nav-link align-middle px-0">
                                    <House color='white' /> <span className="text-white ms-1 d-sm-inline">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <CodeSquare color='white' /> <span className="text-white ms-1 d-sm-inline">My Curses</span>
                                </a>
                                <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li className="w-100">
                                        <a href="#" className="text-white nav-link px-0"> <span className="d-sm-inline">Item</span> 1 </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white nav-link px-0"> <span className="d-sm-inline">Item</span> 2 </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <PersonCircle color='white' /> <span className="text-white ms-1 d-sm-inline">Perfil</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col py-3">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

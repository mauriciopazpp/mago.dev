import useAuth from '@/hooks/useAuth';

function SignIn() {
  const { signin, signout, user, loading } = useAuth();
  console.log('aa', { signin, signout, user, loading });
  return (
    <div>
      {user?.displayName ? (
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-default text-white"
            id="dropdownMenuOffset"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              width={30}
              height={30}
              className="rounded-circle d-inline-block align-text-top"
            />
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark mago-user-dropdown"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a className="dropdown-item active" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => signout()}>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <button type="button" className="btn btn-info" onClick={() => signin()}>
          {loading === true ? <span>Loading</span> : <span>Sign In</span>}
        </button>
      )}
    </div>
  );
}

export default SignIn;

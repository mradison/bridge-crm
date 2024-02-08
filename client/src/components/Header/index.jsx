import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className='header'>
      <div className='header'>
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Bridge CRM
          </h1>
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <div class="menuButtons">
              <button>
              Contact list
              </button>
              <button>
              Group list
              </button>
              <button>
              Activity list
              </button>
              <button>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              </button>
              <button>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              </button>
            </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

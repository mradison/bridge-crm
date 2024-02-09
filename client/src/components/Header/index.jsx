import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header">
      <div className="header">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            Bridge CRM
          </h1>
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
            <button>
              <Link className="btn btn-lg btn-primary m-2" to="/Contacts">
              Contact list
              </Link>
              </button>                   
              <button>
              <Link className="btn btn-lg btn-primary m-2" to="/Groups">
              Group list
              </Link>
              </button>                   
             <button>
              <Link className="btn btn-lg btn-primary m-2" to="/Activities">
              Activity list
              </Link>
              </button>                   
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="menuButtons">                
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

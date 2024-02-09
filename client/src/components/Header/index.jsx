import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  
  return (
    <header className="header">
      <div className="header">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            Bridge CRM
          </h1>
        </Link>
      </div>        
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Navbar = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return(
        <>
            <nav>
                <div>
                    {location.pathname !== "/" && (
                    <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
                        &larr; Go Back
                    </button>
                    )}
                </div>
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
                                <button>Contact list</button>
                                <button>Group list</button>

                                <button>
                                    <Link className="btn btn-lg btn-primary m-2" to="/activities">
                                        Activity list
                                    </Link>
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
            </nav>
        </>
    );

};

export default Navbar;
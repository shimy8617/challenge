import React from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
import "../assets/css/Login.css";

const NavBar = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    navigate("/login");
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
        <div className="container-fluid">
          <Link to="/login" className="navbar-brand">
            Menu
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/productos"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dishes
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/Vegan" className="dropdown-item">
                      Vegan
                    </Link>
                  </li>
                  <li>
                    <Link to="/GlutenFree" className="dropdown-item">
                      Gluten Free
                    </Link>
                  </li>
                  <li>
                    <Link to="/Ketogenic" className="dropdown-item">
                      Ketogenic
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link background-color:none"
                  onClick={logout}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

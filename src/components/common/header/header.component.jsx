import "./header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  return (
    <div className="header-container">
      <div className="left-header">
        <div className="logo"></div>
        <span className="resturant-name">Frying Nemo</span>
      </div>
      <div className="right-header">
        <nav>
          <Link
            className={
              location.pathname === "/add" ||
              location.pathname === "/"
                ? "active-nav-btn"
                : "nav-btn"
                }
            to="/add"
          >
            Add
          </Link>
          <Link
            className={
              location.pathname === "/view"
                ? "active-nav-btn"
                : "nav-btn"
              }
            to="/view"
          >
            View
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;

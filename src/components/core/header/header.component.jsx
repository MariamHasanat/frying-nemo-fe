import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();

  return (
    <div className="main-class">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" width={70} />
        <p>Frying Nemo</p>
      </div>
      <div className="right">
        <nav>
          <Link
            to="/add"
            className={location.pathname === "/add" ? "add" : ""}
          >
            Add
          </Link>
          <Link
            to="/view"
            className={location.pathname === "/view" ? "view" : ""}
          >
            View
          </Link>
        </nav>
        {props.user && (
          <span className="user-badge">
            <img
              src={props.user.imageUrl}
              alt="user logo"
              width={30}
              height={30}
            />
            {props.user.fullName}
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;


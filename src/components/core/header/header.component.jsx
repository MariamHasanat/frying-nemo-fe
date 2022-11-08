import { useContext } from "react";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

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
        {userContext.user && (
          <span className="user-badge">
            {/* <img
              src={props.user.imageUrl}
              alt="user logo"
              width={30}
              height={30}
            /> */}
            <span className="user-name">{userContext.user.fullName}</span>
            <button className="logout" onClick={() => {
              userContext.setUser(null);
              navigate('/login');
            }
            }>Logout</button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;


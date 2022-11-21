import "./header.css";
import { Link,useLocation,useNavigate } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
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
              location.pathname === "/add" 
                ? "active-nav-btn"
                : "nav-btn"
                }
            to="/add"
          >
            Add
          </Link>
          <Link
            className={
              location.pathname === "/view"||
              location.pathname === "/"||
              location.pathname.includes("/view-item")
                ? "active-nav-btn"
                : "nav-btn"
              }
            to="/view"
          >
            View
          </Link>
        </nav>
        {
          props.user &&
          <span className="user-badge">
            <img src={props.user.imageUrl} alt="user logo" width={30} height={30} />
            {props.user.fullName}
            <button
              onClick={() => {
                props.setUser(null);
                navigate('/login');
              }}
            >
              Logout
            </button>
          </span>
        }
      </div>
    </div>
  );
};

export default Header;

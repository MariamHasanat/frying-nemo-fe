import { useContext } from "react";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../user-provider/user-provider";

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  let itemsCount = 0;
  for (let i = 0; i < props.cart.length; i++) {
    itemsCount += props.cart[i].quantity;
  }

  return (
    <div className="main-class">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" width={70} />
        <p>Frying Nemo</p>
      </div>
      <div className="right">
        <span className="cart">Your Cart {itemsCount}</span>
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


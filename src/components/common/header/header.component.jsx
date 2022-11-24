import "./header.css";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/user-provider.component";
import { CartContext } from "../../providers/cart-provider.component";
import { useContext } from "react";
import cartIcon from "../../../assets/cart.svg";

const Header = (props) => {
  const cartContext = useContext(CartContext);
  let itemsCount = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    itemsCount += cartContext.cart[i].quantity;
  }

  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
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
        <Link className="cart" to="cart">
          <img src={cartIcon} alt="cart icon" />
          <span className="count">{itemsCount}</span>
        </Link>
        {
          userContext.user &&
          <span className="user-badge">
            <img src={userContext.user.imageUrl} alt="user logo" width={30} height={30} />
            {userContext.user.fullName}
            <button
              onClick={() => {
                userContext.setUser(null);
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

import { useContext } from "react";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/user-provider";
import { CartContext } from '../../providers/cart-provider.component';

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  let totalCartQuantity = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    totalCartQuantity += cartContext.cart[i].quantity;
  }

  return (
    <div className="main-class">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" width={70} />
        <p>Frying Nemo</p>
      </div>
      <div className="right">
        <nav>
          {
            userContext.user ? (
              <Link to="/add" className={location.pathname === "/add" ? 'add' : ''}>
                Add
              </Link>
            ) : (
              <Link to="/login" className={location.pathname === "/login" ? 'login' : ''}>
                Login
              </Link>
            )
          }
          <Link to="/view" className={location.pathname === "/view" ? 'view' : ''}>
            View
          </Link>
        </nav>
        <Link className="cart" to="cart">
          <img src={process.env.PUBLIC_URL + "/shopping-cart.png"} alt="" width={30} />
          <span className="count">{totalCartQuantity}</span>
        </Link>
        {
          userContext.user &&
          <span className="user-badge">
            <span className="user-name">{userContext.user.fullName}</span>
            <button className="logout"
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


import React, { useContext } from "react";
import "./header.css";
import cartIcon  from '../../../assests/cart.svg';
import { CartContext } from '../../providers/cart.provider.component';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/user.provider.component";
const Header = (props) => {
  const locatoin = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  let totalCartQuantity = 0;  for (let i = 0; i < cartContext.cart.length; i++) {
    totalCartQuantity  += cartContext.cart[i].quantity;
  }

  return (
    <header className="webisteHeader" >
      <div className="left">
        <h1>Frying Nemo</h1>
      </div>
      <div className="right">
        <nav>
        <Link to="/add" className={locatoin.pathname === "/add"?"current" : ""}>Add</Link>
        <Link to="/view" className={locatoin.pathname === "/view"?"current" : ""}>View</Link>
        </nav>
        <Link className="cart" to="cart">
          <img src={cartIcon} alt="cart icon" />
          <span className="count">{totalCartQuantity}</span>
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
            }}>LogOut</button>
          </span>
        }

      </div>
    </header>
  );
};

export default Header;

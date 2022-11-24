import React, { useContext } from 'react';
import './header.css';
import { UserContext } from '../../provider/user-provider.component';
import {CartContext} from '../../provider/cart-provider.component';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);


let totalCartQuantity = 0
  for (let i = 0; i< cartContext.cart.length; i++) {
    totalCartQuantity += cartContext.cart[i].quantity;
  }

  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <nav>
    {
      userContext.user ?(
        <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
            Add
          </Link>
      ):(
        <Link to="/login" className={location.pathname === "/login" ? 'current' : ''}>
            login
          </Link>
      )
    }
          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
            View
          </Link>
        </nav>
        <Link className="cart" to="/cart">
          <span className="count">{totalCartQuantity}</span>
        </Link>
        {
          userContext.user &&
          <span className="user-badge">
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
    </header>
  );
};

export default Header;

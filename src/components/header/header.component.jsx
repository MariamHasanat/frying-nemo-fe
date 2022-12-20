import React, { useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/user-provider.component';
import { ShoppingCart, SignOut } from 'phosphor-react';
import { CartContext } from '../providers/cart-provider.component';

const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  let totalCartQuantity = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    totalCartQuantity += cartContext.cart[i].quantity;
  }

  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src="./nemo.svg" alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        {/* <span > Your Cart {totalCartQuantity}</span> */}
        <nav>
          {
            userContext.user ? (

              <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
                Add
              </Link>
            ) : (
              <Link to="/login" className={location.pathname === "/login" ? 'current' : ''}>
                Login
              </Link>

            )
          }
          <Link to="/view" className={location.pathname.startsWith('/view') ? 'current' : ''}>
            View
          </Link>

        </nav>

        <Link className="cart" to="cart">

          <ShoppingCart size={32} color="#000" />
          <span className="count">{totalCartQuantity}</span>

        </Link>

        {
          userContext.user &&
          <span className="user-badge">
            <img src={userContext.user.imageUrl} alt="user logo" width={30} height={30} className="orange" />
            {userContext.user.fullName}
            <button

            onClick={() => {
              userContext.setUser(null);
              navigate('/login');

            }}
              
            >
            <SignOut size={30} color="#a70c65" />
          </button>
          </span>
        }

    </div>
    </header >
  );
};

export default Header;



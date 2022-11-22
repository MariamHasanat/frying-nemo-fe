import React, { useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/user-provider.component';
import cartIcon from '../../assets/cart.svg';

const Header = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  let totalCartQuantity = 0;
  for (let i = 0; i < props.cart.length; i++) {
    totalCartQuantity += props.cart[i].quantity;
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
        <span > Your Cart {totalCartQuantity}</span>
        <nav>

          <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
            Add

          </Link>

          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
            View

          </Link>

        </nav>

        <Link className="cart" to="cart">

          <img src={cartIcon} alt="cart icon" />
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
              className="padding-right: 50px;"
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



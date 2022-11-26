
import nemo from '../../image/nemo.png';
import React, { useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/provider/provider.component';
import { CartContext } from '../../components/provider/cart-provider.component';

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext=useContext(CartContext);

  let totalCartQuantity = 0;

  for (let i = 0; i < cartContext.cart.length; i++) {
    totalCartQuantity += cartContext.cart[i].quantity;
  }

  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src={nemo} alt="Nemo" />
          Frying Nemo
        </h1>
      </div>

      <div className="right">
        <Link className="cart" to="cart">
          <img src="data:image/png;base64,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" alt="cart icon" />
          <span className="count">{totalCartQuantity}</span>
        </Link>


        <nav>
          { 
            userContext.user?(
              <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
                Add
              </Link>
            ) : (
              <Link to="/login" className={location.pathname === "/login" ? 'current' : ''}>
                Login
              </Link>
            )
        }
        <Link to='/view' className={location.pathname.startsWith('/view') ? "current" : ""}>View</Link>
        </nav>
        {
          userContext.user &&
          <span className="user-info">
            <img src={userContext.user.imageUrl} alt="user logo" width={30} height={30} />

            <h3>{userContext.user.fullName}</h3>
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


import nemo from '../../image/nemo.png';
import React, { useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/provider/provider.component';
import { CartContext } from '../../components/provider/cart-provider.component';
import { ShoppingCartSimple } from 'phosphor-react';

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
        <ShoppingCartSimple size={32} color="#627cd1" />
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

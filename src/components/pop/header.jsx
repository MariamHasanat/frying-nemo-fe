import React, { useContext } from 'react';
import './header.css';
import { UserContext } from '../../App';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../providers/cart-provider';
import cartIcon from '../../assets/cart.svg';
import { ShoppingCart, SignOut } from 'phosphor-react';


const Head = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);


  let itemsCount = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    itemsCount += cartContext.cart[i].quantity;
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
        {/* <span>Your Cart {itemsCount}</span> */}
        <nav>
          {
            userContext.user ?
              (<Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
                Add
              </Link>) :
              <Link to="/login" className={location.pathname === "/login" ? 'current' : ''}>
                LOGIN
              </Link>
          }
          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
            View
          </Link>
          <Link className="cart" to="cart" >
            <ShoppingCart size={24} color="#800080" />

            <span className="count">
              {itemsCount}
            </span>
          </Link>
          {userContext.user ?
            <SignOut onClick={() => {
              userContext.setUser(null);
              localStorage.removeItem('cart');
              cartContext.cart = {};
              navigate('/login');
            }
            }
              className="log"
              size={32} color="#800080" >
            </SignOut> : ""
          }
        </nav>
        {
          userContext.user &&
          <span>{userContext.user.fullName}</span>
        }

      </div>
    </header>
  );
};

export default Head;
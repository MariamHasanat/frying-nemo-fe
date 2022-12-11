import React from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/provider.component';
import { useContext } from 'react';
import { CartContext } from '../providers/cart-provider.component';
import { ShoppingCart, SignOut } from 'phosphor-react';


const Header = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const emptyCart = () =>cartContext.dispatch({type: 'EMPTY'});

  let totalCartQuantity = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    totalCartQuantity += cartContext.cart[i].quantity;
  }

  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./Nemo-FN.webp" alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <nav>
        {
            userContext.user ? (
              <>
                <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
                  Add
                </Link>
                <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
                  View
                </Link>
              </>
            ) : null
          }
        </nav>
        <Link className="cart" to="cart">
        <ShoppingCart size={32} /> 
        <span className="count">{totalCartQuantity}</span>
        </Link>

        {
          userContext.user &&
          <span className="user-badge">
            <img src={userContext.user.imageUrl} alt="user logo" width={30} height={30} />
            {userContext.user.fullName}
            <button onClick={()=>{
              userContext.setUser(null); emptyCart();
              navigate('/login')
            }}><SignOut size={28} /></button>
          </span>
        }

      </div>
    </header>
  );
};

export default Header;

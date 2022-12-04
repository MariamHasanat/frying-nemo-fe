import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cartIcon from '../../../assets/cart.svg';
import { CartContext } from '../../providers/cart-provider.component';
import { UserContext } from '../../providers/user-provider.component';
import "./header.css";


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
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src="./008.svg" alt="fish-pic"  width={40} height={40} />
          Frying Nemo resturent
        </h1>
      </div>
      <div className='right'>
      <span>Your Cart {totalCartQuantity}</span>
        <nav>{

        userContext.user ? (
           
                <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
                  Add
                </Link>
                ):(
                <Link to="/login" className={location.pathname === "/login" ? 'current' : ''}>
             login
                </Link>
            
            
  )
  }
  <Link to="/view" className={location.pathname === "/view" ? 'current' : ''} >
    view 
  </Link>

        </nav>
        
        <Link className="cart" to="cart">
          <img src={cartIcon} alt="cart icon"  width={30} height={30} />
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
              }}>logout</button>
          </span>
        }

      </div>
    </header>
  );
};

export default Header;
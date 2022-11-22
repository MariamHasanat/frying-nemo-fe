import React, { useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import cartIcon from '../../../assets/cart.svg';
import { CartContext } from '../../providers/cart-provider.component';


  const Header = (props ) => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    const cartContext = useContext(CartContext);

    let totalCartQuantity = 0;
    for (let i = 0; i < cartContext.cart.length; i++) {
      totalCartQuantity += cartContext.cart[i].quantity;
    }
  
  
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./008.svg" alt="fish-pic"  width={40} height={40} />
          Frying Nemo resturent
        </h1>
      </div>
      <div className='right'>
      <span>Your Cart {totalCartQuantity}</span>
        <nav>
          {/* <button className={props.currentPage === 'add' ? 'current':''}  onClick = {()=>props.onNavigate('add')}>add</button> */}
          {/* <button className={props.currentPage === 'view' ? 'current':''}  onClick = {()=>props.onNavigate('view')}>view</button> */}
          {/* <button className={props.currentPage === 'page-not-found' ? 'current':''}  onClick = {()=>props.onNavigate('page-not-found')}>page-not-found</button> */}
          {/* <a href='./add'>add</a>
<br></br>
<a href='./view'>view</a> */}

          <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>add</Link>
          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>view</Link>

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
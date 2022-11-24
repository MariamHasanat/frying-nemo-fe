import './header.css';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../components/providers/user-provider.component';
import { CartContext } from '../../providers/cart-provider.component';


const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartContext = useContext (CartContext) ;
  const userContext = useContext(UserContext);
  let cartCounter = 0;
  cartContext.cart.forEach(item => cartCounter += item.quantity);
  return (
    <div className='webisteHeader'>
      <div className='left'>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
      </div>
      <span>cart : {cartCounter}</span>
      <div className="right">
        <nav>
          <Link to='/add' className={location.pathname === '/add' ? 'current' : ''}> Add </Link>
          {/* <a href='/add'> Add </a> */}
          <Link to='/view' className={location.pathname.includes('/view') ? 'current' : ''}> View </Link>
          {userContext.user && 
            <div className="cartWrapper">
              <Link to={'/cart'}><img src="./cart.svg" alt="cart icone" /></Link>
              <span>{cartCounter}</span>
            </div>
          }
          {
            userContext.user &&
            <span className="user-badge">
              <img src={userContext.user.imageUrl} alt="user  logo" width={30} height={30} />
              {userContext.user.fullName}
              <button
                onClick={() => {
                  userContext.setUser(null);
                  localStorage.removeItem ('cart') ;
                  navigate('/login');
                }}
              >
                Logout
              </button>
            </span>
          }
        </nav>
      </div>
    </div>
  );
};
export default Header;
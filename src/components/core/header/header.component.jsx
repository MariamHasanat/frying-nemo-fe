import React, { useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../provider/user-provider.component.jsx';
import CartProvider, { CartContext } from '../../provider/cart.provider';


const Header = (props) => {
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLITglPtvzFwzE2KRThyzob4JM6KSStgPVg&usqp=CAU" alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <span className='Cart'>Cart {itemsCount}</span>
        <nav>
          {
            userContext.user ? (
              
                <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
                  Add
                </Link>
                ):(
                <Link to="/login" className={location.pathname === "/login" ? 'current' : ''}>
                  Login
                </Link>
                )
              
            
          }
          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
            View
          </Link>
        </nav>
        {
          userContext.user &&
          <span className="user-badge">
            <img src={userContext.user.imageUrl} alt="user logo" width={30} height={30} />
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



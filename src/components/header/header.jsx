import './header.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/fish-removebg-preview.png';
import { useContext } from 'react';
import { UserContext } from '../provider/provider';
// 
import cartIcon from '../../assets/illustrations/cart.svg';
import { CartContext } from '../provider/cartprovider';
const Handel = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  let itemCount = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    itemCount += cartContext.cart[i].quantity;
  }
  return (
    <header className='websiteHeader'>
      <div className='left'>
        <img src={logo} alt="Nemo" />
        <h1>Seafood Restaurant</h1>
      </div>

      <div className='right'>
        <nav>
          <Link to="/add" className={location.pathname === "/add" ? 'current' : ""}>Add</Link>

          < Link to="/view" className={location.pathname.includes("view") ? 'current' : ""}>View</Link >
        </nav>
        <Link className="cart" to="cart">
          <img src={cartIcon} alt="cart icon" />
          <span className="count">{itemCount}</span>
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
export default Handel;
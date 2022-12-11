import './header.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/fish-removebg-preview.png';
import { useContext } from 'react';
import { UserContext } from '../provider/provider';
import cartIcon from '../../assets/illustrations/cart.svg';
import { CartContext } from '../provider/cartprovider';
import { ShoppingCart, SignOut } from 'phosphor-react';
const Handel = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  let itemCount = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    itemCount += cartContext.cart[i].quantity;
  } console.log(itemCount);
  return (
    <header className='websiteHeader'>
      <div className='left'>
        {/* <img src={logo} alt="Nemo" /> */}
        <ShoppingCart size={30} />
        <h1>Seafood Restaurant</h1>
      </div>

      <div className='right'>
        <nav>
          {
            userContext.user ? (
             
                <Link to="/add" className={location.pathname === "/add" ? 'current' : ""}>Add</Link>
              
            ) : (
              <Link to="/login" className={location.pathname === "/login" ? 'current' : ""}>login</Link>
            )
          }
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
            <SignOut size={30} weight={'fill'} />
          
            </button>
          </span>
        }
      </div>
    </header>
  );
};
export default Handel;
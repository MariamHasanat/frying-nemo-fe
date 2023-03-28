import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/user-provider.component';
import { CartContext } from '../providers/cart-provider.component';
import './header.css';
import logo from './images/logo.png';
import cartIcon from '../../../assets/cart.svg';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isSelected = (path) => location.pathname.includes(path) ? `selected` : null;
  const getCartQuantity = () => cart.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0);

  return (
    <div className='page-header'>

      <div onClick={() => { !isSelected(`view`) && navigate('/view'); }} className='logo'>
        <img src={logo} alt="Logo" />
        <p>FRYING NEMO</p>
      </div>

      <div className='btns'>
        <Link to='/add' className={isSelected(`add`)}>Add</Link>
        <Link to='/view' className={isSelected(`view`)}>View</Link>
        {!user && <Link to='/login' className={isSelected(`login`)}>Login</Link>}
        <Link className={`cart ${isSelected(`cart`)}`} to="cart">
          <img src={cartIcon} alt="cart icon" />
          <span className="count">{getCartQuantity()}</span>
        </Link>

        {user && <div className='user-info'>
          <img src="https://www.nicepng.com/png/full/137-1379898_anonymous-headshot-icon-user-png.png" alt="User Image" />
          <p>{user.fullName}</p>
        </div>}

        {user && <Link to='/login' className='logout' onClick={() => setUser(null)}>Logout</Link>}
      </div>

    </div>
  );
};

export default Header;
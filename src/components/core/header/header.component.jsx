import { useContext } from 'react';
import { UserContext } from '../providers/user-provider.component';
import './header.css';
import logo from './images/logo.png';
import Timer from './timer/timer.component';
import cartIcon from '../../../assets/cart.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { user, cart } = useContext(UserContext);
  const location = useLocation();
  return (
    <div className='page-header'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
        <p>FRYING NEMO</p>
        <Timer></Timer>
      </div>
      <div className='btns'>
        <Link to='/add' className={location.pathname.includes('add') ? `selected` : undefined}>Add</Link>
        <Link to='/view' className={location.pathname.includes('view') ? `selected` : undefined}>View</Link>
        <Link className={`cart ${location.pathname.includes('cart') ? `selected` : ``}`} to="cart">
          <img src={cartIcon} alt="cart icon" />
          <span className="count">{cart.length}</span>
        </Link>

        {user && <div className='user-info'>
          <img src="https://www.nicepng.com/png/full/137-1379898_anonymous-headshot-icon-user-png.png" alt="User Image" />
          <p>{user.fullName}</p>
        </div>}
        {user && <Link to='/login' className='logout' onClick={() => sessionStorage.clear()}>Logout</Link>}
      </div>
    </div>
  );
};

export default Header;
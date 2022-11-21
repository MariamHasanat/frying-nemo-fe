import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../../assets/images/image.png';
import profile from '../../../assets/images/profile-user.png';
import logout from '../../../assets/images/logout.png';
import { useContext } from 'react';
import { UserContext } from '../../../components/providers/user-provider';


const Header = (props) => {
  const userContext = useContext(UserContext);
  const location = useLocation();

  let itemsCounter = 0;
  props.cart.forEach(item => itemsCounter += item.quantity);

  return (
    <div className={'header'}>
      <div className='logo'>
        <img src={logo} alt="logo" width={60} />
        <span id='app-title'>Frying Nemo</span>
      </div>

      <div className='header-navigation-buttons'>
        <nav>

          <Link to='/add' className={location.pathname === '/add' ? 'current-page' : 'unselected-page'}>Add</Link>

          <Link to='/view' className={location.pathname === '/view' ? 'current-page' : 'unselected-page'}> View</Link>

          <Link to='/cart' className={location.pathname === '/cart' ? 'current-page' : 'unselected-page'}>Cart</Link>

        </nav>
      </div>

      <span>Your Cart: <span className='items-counter'>{itemsCounter}</span></span>
      {
        userContext.user !== null &&
        <div className='user-info'>
          <span>{userContext.user?.fullName}</span>
          <div className='user-profile'>
            <img src={profile} alt="user" />
          </div>



          <button className='logout' onClick={() => userContext.setUser(null)}>
            <div className='logout-button'>
              <span>Logout</span>
              <img src={logout} alt="logout" />
            </div>
          </button>
        </div>


      }

    </div >
  );
};

export default Header;
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../../assets/images/image.png';
import profile from '../../../assets/images/profile-user.png';
import logout from '../../../assets/images/logout.png';
import { useContext } from 'react';
import { UserContext } from '../../../components/providers/user-provider';
const Header = () => {
  const userContext = useContext(UserContext);
  const location = useLocation();
  return (
    <div className={location.pathname === '/login' ? 'hidden' : 'header'}>
      <div className='logo'>
        <img src={logo} alt="logo" width={60} />
        <span id='app-title'>Frying Nemo</span>
      </div>

      <div className='header-navigation-buttons'>
        <nav>

          <Link to='/add' className={location.pathname === '/add' ? 'current-page' : ''}>Add</Link>

          <Link to='/view' className={location.pathname === '/view' ? 'current-page' : ''}> View</Link>

        </nav>
      </div>

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
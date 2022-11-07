import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../../assets/images/image.png'
const Header = (props) => {
  const location = useLocation();
  return (
    <div className={location.pathname === '/login' ? 'hidden' : 'header'}>
      <div>
        <img src={logo} alt="logo" width={60} />
        <span id='app-title'>Frying Nemo</span>
      </div>
      {
        props.user !== null &&
        <span>Welcome, {props.user.fullName} !</span>
      }

      <div className='header-navigation-buttons'>
        <nav>

          <Link to='/add' className={location.pathname === '/add' ? 'current-page' : ''}>Add</Link>

          <Link to='/view' className={location.pathname === '/view' ? 'current-page' : ''}> View</Link>

        </nav>
      </div>
    </div >
  );
};

export default Header;
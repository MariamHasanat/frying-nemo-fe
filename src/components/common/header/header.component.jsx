import { Link, useLocation } from 'react-router-dom';
import './header.css';

/**
 * 
 * @param {{
 * onNavigate:(page)=>void;
 * currentPage: string
 * }} props 
 * @returns 
 */
const Header = () => {
  const location = useLocation();
  return (
    <div className='header'>
      <div>
        <img src="images/logo.svg" alt="logo" width={60} />
        <span id='app-title'>Frying Nemo</span>
      </div>

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
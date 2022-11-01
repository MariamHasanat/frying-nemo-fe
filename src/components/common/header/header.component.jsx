import { Link } from 'react-router-dom';
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
  return (
    <div className='header'>
      <div>
        <img src="images/logo.svg" alt="logo" width={60} />
        <span id='app-title'>Frying Nemo</span>
      </div>

      <div className='header-navigation-buttons'>
        <nav>

          <Link to='/add'>Add</Link>

          <Link to='/view'>View</Link>

        </nav>
      </div>
    </div>
  );
};

export default Header;
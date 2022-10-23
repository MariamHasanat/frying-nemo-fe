import './header.css';
/**
 * 
 * @param {{
 * onNavigate:(page)=>void;
 * currentPage: string
 * }} props 
 * @returns 
 */
const Header = (props) => {
  return (
    <div className='header'>
      <div>
        <img src="images/logo.svg" alt="logo" width={60} />
        <span id='app-title'>Frying Nemo</span>
      </div>

      <div className='header-navigation-buttons'>
        <nav>

          <a href='/add'>
            Add
          </a>

          <a href='/view'>

            View
          </a>

        </nav>
      </div>
    </div>
  );
};

export default Header;
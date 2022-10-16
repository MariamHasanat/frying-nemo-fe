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
          
          <button
            className={props.currentPage === 'add' ? 'current-page' : ''}
            onClick={e => { props.onNavigate('add'); }}>
            Add
          </button>
          
          <button
            className={props.currentPage === 'view' ? 'current-page' : ''}
            onClick={e => { props.onNavigate('view'); }}>
            View
          </button>

        </nav>
      </div>
    </div>
  );
};

export default Header;
import React from 'react';
import './header.css';
import { Link , useLocation} from 'react-router-dom';



const Header = (props) => {

  const location =useLocation();
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./Nemo-FN.webp" alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <nav>
          <Link to="/add" className={location.pathname === '/add' ? 'current' : ''}>
            Add          </Link >

          <Link to="/view" className={location.pathname === '/view' ? 'current' : ''}>
            view          </Link >

          {/* <button className={props.currentPage === 'add' ? 'current' : ''} onClick={() => props.onNavigate('add')}>Add</button>
          <button className={props.currentPage === 'view' ? 'current' : ''} onClick={() => props.onNavigate('view')}>View</button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

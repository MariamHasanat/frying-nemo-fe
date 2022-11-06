import React from 'react';
import logo from '../../assets/nemo.svg'
import './header.css';
import {Link , useLocation} from 'react-router-dom'
const Header = props => {
  const location = useLocation();

  return (
    <header className="webisteHeader">
      <div className="classWhichHaveHeaderContent">
        <h1>
          <img src={logo} alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right" >
        <nav>
          <Link to='/add' className={location.pathname === '/add' ? 'current' : ''}  
          >Add</Link>
          <Link to='/view' className={location.pathname === '/view' ? 'current' : ''}
          >View</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

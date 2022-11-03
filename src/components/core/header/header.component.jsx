import React from 'react';
import './header.css';

import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();  
  
  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src="./nemo.svg" alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <nav>
          <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
            Add
          </Link>
          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
            View
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
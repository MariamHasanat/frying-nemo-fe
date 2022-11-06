// import React, { useState } from 'react';
import './Header.css';
import { Link , useLocation } from 'react-router-dom'

const Header = props => {
 const location = useLocation()

  return (
    <header >
      <div className="Header">
        <div className="left">
          <h1>
            <img src="./res.png" alt="" />
            Frying Nemo
          </h1>
        </div>
        <div className="right">
          <nav>
            <Link
             to='/add'
             className={location.pathname === '/add' ? 'current' : ''}
             >Add</Link >
            <Link
             to='/view'
             className={location.pathname.includes('/view') ? 'current' : ''}
             >View</Link >
          </nav>
        </div>
        
      </div>

    </header>
  );
};

export default Header;

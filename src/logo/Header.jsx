// import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

const Header = props => {

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
            <Link to='/add'
             >Add</Link >
            <Link to='/view'
             >View</Link >
          </nav>
        </div>
        
      </div>

    </header>
  );
};

export default Header;

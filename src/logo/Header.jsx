// import React, { useState } from 'react';
import './Header.css';

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
            <a href='/add'
             >Add</a>
            <a href='/view'
             >View</a>
          </nav>
        </div>
        
      </div>

    </header>
  );
};

export default Header;

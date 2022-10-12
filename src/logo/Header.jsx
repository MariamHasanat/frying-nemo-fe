import React, { useState } from 'react';
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
            <button className={props.curretnPage == 'add' ? 'current' : ''}
              onClick={() => props.onNavigate('add')}>Add</button>
            <button className={props.curretnPage == 'view' ? 'current' : ''}
             onClick={() => props.onNavigate('view')}>View</button>
          </nav>
        </div>
        
      </div>

    </header>
  );
};

export default Header;

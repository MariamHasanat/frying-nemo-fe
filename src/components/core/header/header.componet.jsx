import React from 'react';
import './header.css';

const Header = props => {
  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src="./doner.svg" alt="Nemo" className='doner-img' />
          Sheesh Kabab
        </h1>


      </div>
      <div className='right'>
        <a className='add-button' href='add'>
          Add
        </a>
        <a className='view-button'href='view'>
          View
        </a>
      </div>
    </header>
  );
};

export default Header;
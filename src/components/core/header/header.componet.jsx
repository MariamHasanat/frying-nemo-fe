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
        <div className='add-button' onClick={'#add'}>
          Add
        </div>
        <div className='view-button' onClick={() => {props.setPageName('view')}  }>
          View
        </div>
      </div>
    </header>
  );
};

export default Header;
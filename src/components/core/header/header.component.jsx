import React from 'react';
import './header.css';

const Header =( props) => {
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./008.svg" alt="fish-pic" />
          Frying Nemo resturent 
        </h1>
      </div>
      <div className='right'>
        <nav>
          <button className={props.currentPage === 'add' ? 'current':''}  onClick = {()=>props.onNavigate('add')}>add</button>
          <button className={props.currentPage === 'view' ? 'current':''}  onClick = {()=>props.onNavigate('view')}>view</button>
          <button className={props.currentPage === 'page-not-found' ? 'current':''}  onClick = {()=>props.onNavigate('page-not-found')}>page-not-found</button>


        </nav>

      </div>
    </header>
  );
};

export default Header;
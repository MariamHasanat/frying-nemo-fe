import React from 'react';
import './header.css';

const Header = props => {
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          Frying Nemo
        </h1>
      </div>
      <div className="right">
       <a href="/add">Add</a>
       <a href="/view">View</a>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './header.css';

const Header = props => {
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./nemo.svg" alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">

        <nav>

          <a href="/add">
            Add

          </a>

          <a href="/view">
            View       

          </a>

        </nav>
      </div>
    </header>
  );
};

export default Header;



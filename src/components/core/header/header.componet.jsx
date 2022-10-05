import React from 'react';
import './header.css';

const Header = props => {
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./008.svg" alt="fish-pic" />
          Frying Nemo resturent
        </h1>
      </div>
    </header>
  );
};

export default Header;
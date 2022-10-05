import React from 'react';
import './header.css';
import nemo from '../../image/nemo.png';

const Header = props => {
  return (
    <header className="header">
      <div className="HeaderDesign">
        <h1>
          <img src={nemo} alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
    </header>
  );
};

export default Header;

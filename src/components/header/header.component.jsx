import React from 'react';
import './header.css';

const Header = props => {
  return (
    <header className="webisteHeader">
      <div className="classWhichHaveHeaderContent">
        <h1>
          <img src="./nemo.svg" alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
    </header>
  );
};

export default Header;

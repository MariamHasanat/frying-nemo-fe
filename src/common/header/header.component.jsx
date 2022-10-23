
import nemo from '../../image/nemo.png';
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src={nemo} alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <nav>
          <Link to='/add' >Add</Link>
          <Link to='/view'>View</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


import nemo from '../../image/nemo.png';
import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
  const location = useLocation();
  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src={nemo} alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
     
      <div className="right">
        {
          props.user &&
          <span className="user-info">
            <img src={props.user.imageUrl} alt="user logo" width={30} height={30} />
            <h3>{props.user.fullName}</h3>
          </span>
        }
        <nav>
          <Link to='/add' className={location.pathname === "/add" ? "current" : ""}>Add</Link>
          <Link to='/view' className={location.pathname.startsWith('/view') ? "current" : ""}>View</Link>
        </nav>
        
        
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './header.css';
import logo from '../../../assets/nemo.svg';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src={logo} alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <nav>
          <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
            Add
          </Link>
          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
            View
          </Link>
        </nav>
        {
          props.user &&
          <span className="user-badge">
            <img src={props.user.imageUrl} alt="user logo" width={30} height={30} />
            {props.user.fullName}
            <button
              onClick={() => {
                props.setUser(null);
                navigate('/login');
              }}
            >
              Logout
            </button>
          </span>
        }
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import logo from '../../assets/nemo.svg';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = props => {

  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  return (
    <header className="webisteHeader">
      <div className="classWhichHaveHeaderContent">
        <h1>
          <img src={logo} alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right" >
        <nav>
          <Link to='/add' className={location.pathname === '/add' ? 'current' : ''}
          >Add</Link>
          <Link to='/view' className={location.pathname === '/view' ? 'current' : ''}
          >View</Link>
        </nav>
        <button
          onClick={() => {
            userContext.setUser(null);
            navigate('/login');
          }}

        >Log out </button>
      </div>
    </header>
  );
};

export default Header;

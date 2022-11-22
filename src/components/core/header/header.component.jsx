
import React from 'react';
import './header.css';
import { UserContext } from '../../providers/user-provider.component';
import { useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import cartIcon from '../../../assets/illustrations/shopping-cart.svg';

const Header = () => {
  const props = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src="./doner.svg" alt="Nemo" className='doner-img' />
          Sheesh Kabab
        </h1>


      </div>
      <div className="right">
        <nav>
          <a href='/add' className={window.location.pathname === "/add" ? 'current' : ''}>
            Add
          </a>
          <a href='/view' className={window.location.pathname === "/view" ? 'current' : ''}>
            
            View
          </a>
        </nav>
        {
          <button className='btn'>
            <img src={cartIcon} alt='shopping-cart'></img>
          </button>
        }

        {
          <button className='logout-button' onClick={() => { 

            props.setUser(null);
            navigate('/login');
          }}>
            Logout
          </button>
        }
      </div>
    </header>
  );
};

export default Header;
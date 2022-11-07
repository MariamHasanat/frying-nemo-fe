import './header.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Header = (props) => {
  const location = useLocation () ;
  return (
    <div className='webisteHeader'>
      <div className='left'>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
      </div>
      <div className="right">
        <nav>
          <Link to='/add' className={location.pathname === '/add' ? 'current' : ''}> Add </Link>
          {/* <a href='/add'> Add </a> */}
          <Link to='/view' className={location.pathname.includes ('/view') ? 'current' : ''}> View </Link>
          {props.user ? <p>Hello {props.user.fullName}</p> : ''}
        </nav>
      </div>

    </div>
  );
};
export default Header;
import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <div className='webisteHeader'>
      <div className='left'>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
      </div>
      <div className="right">
        <nav>
          <Link to='/add'> Add </Link>
          {/* <a href='/add'> Add </a> */}
          <Link to='/view'> View </Link>
        </nav>
      </div>

    </div>
  );
};
export default Header;
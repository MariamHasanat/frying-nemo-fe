import './header.css';
import React from 'react';


const Header = (props) => {
  return (
    <div className='webisteHeader'>
      <div className='left'>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
      </div>
      <div className="right">
        <nav>
          <a href='/add'> Add </a>
          <a href='/view'> View </a>
        </nav>
      </div>

    </div>
  );
};
export default Header;
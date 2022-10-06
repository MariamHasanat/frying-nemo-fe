import './header.css';
import React from 'react';


const Header = (props) => {
  return (
    <div className='webisteHeader'>
      <div className='left'>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};
export default Header;
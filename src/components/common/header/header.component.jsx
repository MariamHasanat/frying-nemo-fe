import './header.css';
import React from 'react';


const Header = (props) => {
  return (
    <div className='webisteHeader'>
      <div className='left'>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
        <nav>
          <button onClick = {() => props.onNavigate ('add')} >Add</button>
          <button onClick = {() => props.onNavigate ('view')}>View</button>
        </nav>
      </div>
      <div className="right">

      </div>
    </div>
  );
};
export default Header;
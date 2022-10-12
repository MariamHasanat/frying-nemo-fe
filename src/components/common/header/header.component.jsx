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
          <button type='button'
            className={props.currentPage == 'add' ? 'current' : ''}
            onClick={() => {props.onNavigate ('add')}}
          >
            Add
          </button>
          <button type='button'
            className={props.currentPage == 'view' ? 'current' : ''}
            onClick={() => {props.onNavigate ('view')}}
          >
            View
          </button>
        </nav>
      </div>

    </div>
  );
};
export default Header;
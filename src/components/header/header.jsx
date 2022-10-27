import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';



const Header = (props) => {
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./Nemo-FN.webp" alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <nav>
          <Link to="/add">
            Add          </Link >

          <Link to="/view">
            view          </Link >

          {/* <button className={props.currentPage === 'add' ? 'current' : ''} onClick={() => props.onNavigate('add')}>Add</button>
          <button className={props.currentPage === 'view' ? 'current' : ''} onClick={() => props.onNavigate('view')}>View</button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

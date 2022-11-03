import React from 'react';
import './header.css';
import { Link , useLocation} from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./nemo.svg" alt="b"/>
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <nav>
          <Link to="/add" className={location.pathname === "/add"? "current": ''}>Add</Link>
          <Link to="/view" className={location.pathname === "/vieew"? "current": ''}>View</Link>
         </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
const Header = (props) => {
  const locatoin = useLocation();
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>Frying Nemo</h1>
      </div>
      <div className="right">
        <Link to="/add" className={locatoin.pathname === "/add"?"current" : ""}>Add</Link>
        <Link to="/view" className={locatoin.pathname === "/view"?"current" : ""}>View</Link>
      </div>
    </header>
  );
};

export default Header;

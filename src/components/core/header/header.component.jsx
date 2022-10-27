import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>Frying Nemo</h1>
      </div>
      <div className="right">
        <Link to="/add">Add</Link>
        <Link to="/view">View</Link>
      </div>
    </header>
  );
};

export default Header;

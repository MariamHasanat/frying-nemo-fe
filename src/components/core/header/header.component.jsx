import { useEffect, useState } from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="main-class">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" width={70} />
        <p>Frying Nemo</p>
      </div>
      <h1>Add new Item</h1>
      <div className="right">
        <nav>
          <button
            className={props.currentPage === "add" ? "current" : ""}
            onClick={() => props.onNavigate("add")}
          >
            Add
          </button>
          <button onClick={() => props.onNavigate("view")}>View</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;

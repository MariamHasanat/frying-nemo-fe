import { useEffect, useState } from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="main-class">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="" width={70} />
        <p>Frying Nemo</p>
      </div>
      <div className="right">
        <nav>
          {/* <button className={props.currentPage === 'add' ? 'current' : ''} onClick={() => props.onNavigate('add')}>Add</button>
          <button onClick={() => props.onNavigate('view')}>View</button> */}
          <a href="/add" className='add'>Add</a>
          <a href="/view" className='view'>View</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;

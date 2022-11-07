import React from 'react';
import './header.css';

import { Link  , useLocation } from 'react-router-dom';

const Header =( props) => {
  const location =useLocation();
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./008.svg" alt="fish-pic" />
          Frying Nemo resturent 
        </h1>
      </div>
      <div className='right'>
        <nav>
         {/* <button className={props.currentPage === 'add' ? 'current':''}  onClick = {()=>props.onNavigate('add')}>add</button> */}
          {/* <button className={props.currentPage === 'view' ? 'current':''}  onClick = {()=>props.onNavigate('view')}>view</button> */}
          {/* <button className={props.currentPage === 'page-not-found' ? 'current':''}  onClick = {()=>props.onNavigate('page-not-found')}>page-not-found</button> */}
{/* <a href='./add'>add</a>
<br></br>
<a href='./view'>view</a> */}

<Link to="/add" className={location.pathname==="/add" ? 'current' : ''}>add</Link>
<Link to="/view" className={location.pathname==="/view" ? 'current' : ''}>view</Link>

        </nav>
        {
          props.user &&
          <span className="user-badge">
            <img src={props.user.imageUrl} alt="user logo" width={30} height={30} />
            {props.user.fullName}
          </span>
        }

      </div>
    </header>
  );
};

export default Header;
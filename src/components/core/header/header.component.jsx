import React, { useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';



  const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
  
  
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

          <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>add</Link>
          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>view</Link>

        </nav>
        {
          userContext &&
          <span className="user-badge">
            <img src={userContext.imageUrl} alt="user logo" width={30} height={30} />
            {userContext.fullName}
            <button
              onClick={() => {
              userContext.setUser(null);
                navigate('/login');
              }}>logout</button>
          </span>
        }

      </div>
    </header>
  );
};

export default Header;

import nemo from '../../image/nemo.png';
import React from 'react';
import './header.css';
import { Link,  useLocation, useNavigate } from 'react-router-dom';

const Header = (props) => {
  const location = useLocation();
  const navigate=useNavigate();
  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src={nemo} alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
     
      <div className="right">
       
        <nav>
          <Link to='/add' className={location.pathname === "/add" ? "current" : ""}>Add</Link>
          <Link to='/view' className={location.pathname.startsWith('/view') ? "current" : ""}>View</Link>
        </nav>
         {
          props.user &&
          <span className="user-info">
            <img src={props.user.imageUrl} alt="user logo" width={30} height={30} />
           
            <h3>{props.user.fullName}</h3> 
            <button
              onClick={() => {
                props.setUser(null);
                navigate('/login');
              }}
            >
              Logout
            </button>

          </span>
        }
        
        
      </div>
    </header>
  );
};

export default Header;

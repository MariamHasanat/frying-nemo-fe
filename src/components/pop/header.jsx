import React from 'react';
import './header.css';

import { Link, useLocation, useNavigate} from 'react-router-dom';

const Head = (props) => {
  const location = useLocation();
  const navigate=useNavigate();
  const userContext =useContext(UserContext);

  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src="./nemo.svg" alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <nav>
          <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
            Add
          </Link>
          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
            View
          </Link>
        </nav>
        {
        userContext.user &&
        <span>{userContext.user.fullName}</span>
        }
        <button onClick={()=>{
            userContext.setUser(null);
            navigate('/login'); 
          }
        }
        >LogOut</button>

      </div>
    </header>
  );
};

export default Head;
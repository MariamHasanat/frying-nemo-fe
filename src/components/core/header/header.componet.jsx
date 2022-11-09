import React, { useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from '../../../App';

const Header = (props) => {
  const ContextUser = useContext(UserContext);
  const navigator=useNavigate()
let location=useLocation()
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <div ><img className="img1" src="https://th.bing.com/th/id/OIP.tQeCr2wfItAJ6TtT45cd9QAAAA?w=171&h=180&c=7&r=0&o=5&pid=1.7"></img> </div>
        </h1>
      </div>
      <div className="right">
        {<nav>
          <span  className='header'><Link  className={location.pathname ==="/add"?"add":"default"} to="/add"> ADD</Link> </span>

          <span  className='header' >  <Link className={location.pathname ==="/view"?"add":"default"} to="/view"> View</Link></span>
          <button className='button-header'onClick={()=>{
          ContextUser.setUser(null)
        navigator("login")}}>logout</button>
        </nav>}
        <div >
        {ContextUser.user && <span className='header-flex'><span>{ContextUser.user.role}:</span>{ContextUser.user.fullName}</span> }
      
        </div>
      </div>
    </header>
  );
};

export default Header;

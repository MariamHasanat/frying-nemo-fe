import React, { useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from '../../../App';

const Header = (props) => {
  const ContextUser = useContext(UserContext);
  const navigator = useNavigate();
  let location = useLocation();
  let itemsCount = 0;
 for (let index = 0; index < props.cart.length; index++) {
   itemsCount += props.cart[index].quantity;
  
 }

  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <span ><img className="img1" src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"></img></span>
          <span className='left-header'>
          <span style={{ padding: "0px 0px 0px 5px" }}>Saving-Nemo</span>
          <span className='cart'><img src="https://cdn-icons-png.flaticon.com/512/3514/3514242.png" alt="" />{itemsCount}</span>
          </span>
     
        </h1>

      </div>
      <div className="right">

        {<nav>
          
          <span className='right-click'>
            <span className='header'><Link className={location.pathname.includes("/add") ? "add" : "default"} to="/add"> ADD</Link> </span>

            <span className='header' >  <Link className={location.pathname.includes("/view") ? "add" : "default"} to="/view"> View</Link></span>
            <button className='button-header' onClick={() => {
              ContextUser.setUser(null);
              navigator("login");
            }}>logout</button>
          </span>

          <span className='account-flex'> {ContextUser.user && <span className='header-flex'><span>
            <img className='account' src="https://cdn-icons-png.flaticon.com/128/1144/1144709.png" alt="account" />
          </span><span>{ContextUser.user.role}:</span>{ContextUser.user.fullName}</span>}</span>
        </nav>


        }





      </div>
    </header>
  );
};

export default Header;

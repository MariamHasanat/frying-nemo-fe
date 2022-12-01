import React, { useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from '../../../App';
import { CartContext } from '../../../common/Provider/cart-provider-component';

const Header = (props) => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const navigator = useNavigate();
  let location = useLocation();
  let totalCartQuint = 0;
  for (let index = 0; index < cartContext.cart.length; index++) {
    totalCartQuint += cartContext.cart[index].quantity;

  }

  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <span ><img className="img1" src="https://cdn-icons-png.flaticon.com/512/2276/2276931.png"></img></span>
          <span className='left-header'>
            <span style={{ padding: "0px 0px 0px 5px" }}>Saving-Nemo</span>
            <Link to={"/cart"}><span className='cart'><img src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" alt="" /><span >{totalCartQuint}</span></span></Link>
          </span>

        </h1>

      </div>
      <div className="right">

        {<nav>
          <span className='right-click'>
            {!userContext.user ?

              <button className='button-header' onClick={() => {
                navigator("login");
              }}>Login</button> :

              <span className='header'>
                   <button className='button-header' onClick={() => {
                  userContext.setUser(null);
                  navigator("login");
                }}>logout</button> 
                <Link className={location.pathname.includes("/add") ? "add" : "default"} to="/add"> ADD</Link>
              </span>
            }

            <span className='header' >  <Link className={location.pathname.includes("/view") ? "add" : "default"} to="/view"> View</Link></span>

          </span>
          <span className='account-flex'> {userContext.user && <span className='header-flex'><span>
            <img className='account' src="https://cdn-icons-png.flaticon.com/128/1144/1144709.png" alt="account" />
          </span><span>{userContext.user.role}:</span>{userContext.user.fullName}</span>}</span>
        </nav>


        }





      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../provider/provider.component';
import { useContext } from 'react';


const Header = (props) => {

  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext)

  let itemsCount = 0;
  for (let i = 0; i < props.cart.length; i++) {
    itemsCount += props.cart[i].quantity;
  }

  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./Nemo-FN.webp" alt="Nemo" />
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <span>your cart {itemsCount}</span>
        <nav>
          <Link to="/add" className={location.pathname === '/add' ? 'current' : ''}>
            Add
          </Link >

          <Link to="/view" className={location.pathname === '/view' ? 'current' : ''}>
            view
          </Link >
        </nav>
        {
          userContext.user &&
          <span className="user-badge">
            <img src={userContext.user.imageUrl} alt="user logo" width={30} height={30} />
            {userContext.user.fullName}
            <button onClick={()=>{
              userContext.setUser(null);
              navigate('/login')
            }}>log out</button>
          </span>
        }

      </div>
    </header>
  );
};

export default Header;

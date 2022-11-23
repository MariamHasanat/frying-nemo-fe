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
        <nav>
          <Link to="/add" className={location.pathname === '/add' ? 'current' : ''}>
            Add
          </Link >

          <Link to="/view" className={location.pathname === '/view' ? 'current' : ''}>
            view
          </Link >
        </nav>
        <Link className="cart" to="cart">
          <img className='icon' src='data:image/png;base64,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' alt="cart icon" />
          <span className="count">{itemsCount}</span>
        </Link>

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

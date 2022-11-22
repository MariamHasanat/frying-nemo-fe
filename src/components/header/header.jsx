import './header.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/fish-removebg-preview.png';
import { useContext } from 'react';
import { UserContext } from '../provider/provider';

const Handel = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  let itemCount = 0;
  for (let i = 0 ; i < props.cart.length ; i++){
    itemCount+=props.cart[i].quantity;
  }
  return (
    <header className='handel-group'>
      <img className='img' src={logo} alt="Nemo" />
      <h1>Seafood Restaurant</h1>

      <div>

        {/* 
        
        <div>
          <a href="/add" >Add</a>
          </div>
        <div>< a href = "/view">View</a></div> */}
       
          <span className='yourcart'> Your Cart { itemCount}</span>
      
        <div>
          <Link to="/add" className={location.pathname === "/add" ? 'current' : ""}>Add</Link>
        </div>
        <div>< Link to="/view" className={location.pathname.includes("view") ? 'current' : ""}>View</Link ></div>
        {
          userContext.user &&
          <span className="user-badge">
            <img src={userContext.user.imageUrl} alt="user logo" width={30} height={30} />
            {userContext.user.fullName} <button
              onClick={() => {
                userContext.setUser(null);
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
export default Handel;
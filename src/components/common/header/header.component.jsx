import './header.css';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';


const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext (useContext) ;
  return (
    <div className='webisteHeader'>
      <div className='left'>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
      </div>
      <div className="right">
        <nav>
          <Link to='/add' className={location.pathname === '/add' ? 'current' : ''}> Add </Link>
          {/* <a href='/add'> Add </a> */}
          <Link to='/view' className={location.pathname.includes('/view') ? 'current' : ''}> View </Link>
          {
          user.user &&
          <span className="user-badge">
            <img src={props.user.imageUrl} alt="user logo" width={30} height={30} />
            {props.user.fullName}
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

          {/* {props.user ? <p>Hello {props.user.fullName}</p> : ''}
          <button
            onClick={() => {
              props.setUser(null);
              navigate('/login');
            }}
          >
            Logout
          </button> */}
        </nav>
      </div>
    </div>
  );
};
export default Header;
// import React from 'react';
// import './header.css';
// import logo from '../../../assets/nemo.svg';

// import { Link, useLocation } from 'react-router-dom';

// const Header = (props) => {
//   const location = useLocation();

//   return (
//     <header className="websiteHeader">
//       <div className="left">
//         <h1>
//           <img src={logo} alt="Nemo" />
//           Frying Nemo
//         </h1>
//       </div>
//       <div className="right">
//         <nav>
//           <Link to="/add" className={location.pathname === "/add" ? 'current' : ''}>
//             Add
//           </Link>
//           <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
//             View
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };




// export default Header;
import React from 'react';
import './header.css';
import { useLocation,useNavigate } from 'react-router-dom';
const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="websiteHeader">
      <div className="left">
        <h1>
          <img src="./doner.svg" alt="Nemo" className='doner-img' />
          Sheesh Kabab
        </h1>


      </div>
      <div className="right">
        <nav>
          <a href='/add' className={window.location.pathname === "/add" ? 'current' : ''}>
            Add
          </a>
          <a href='/view' className={window.location.pathname === "/view" ? 'current' : ''}>
            
            View
          </a>
        </nav>
        {
          <button onClick={() => { 

            props.setUser(null);
            navigate('/login');
          }}>
            Logout
          </button>
        }
      </div>
    </header>
  );
};

export default Header;
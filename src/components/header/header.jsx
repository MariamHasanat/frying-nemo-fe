import './header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/fish-removebg-preview.png';
const Handel = (props) => {
  const location = useLocation();
  return (
    <header className='handel-group'>
      <img className='img' src={logo} alt="Nemo" />
      <h1>Seafood Restaurant</h1>

      <div>

        {/* <div>
          <a href="/add" >Add</a>
          </div>
        <div>< a href = "/view">View</a></div> */}
        <div>
          <Link to="/add" className={location.pathname === "/add" ? 'current' : ""}>Add</Link>
        </div>
        <div>< Link to="/view" className={location.pathname.includes("view") ? 'current' : ""}>View</Link ></div>
        {
          props.user &&
          <span className="user-badge">
            <img src={props.user.imageUrl} alt="user logo" width={30} height={30} />
            {props.user.fullName}
          </span>
        }


      </div>
    </header>
  );


};
export default Handel; 
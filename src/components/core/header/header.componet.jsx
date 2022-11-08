import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
  const location = useLocation();

  return (
    <header>
      <div>
        <h1>
          Frying Nemo
        </h1>
      </div>
      <div className="right">
        <nav>
          <Link to="/add" className= 'button'>
            Add
          </Link>
          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
            View
          </Link>
        </nav>
        {
          props.user &&
          <span>
            {/* <img src={props.user.imageUrl} alt="user logo" width={30} height={30} /> */}
            {props.user.fullName}
          </span>
        }
      </div>
    </header>
  );
};

export default Header;

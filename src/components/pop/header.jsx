import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Head = (props) => {
  const location = useLocation();

  return (

    <header>
      <div className="head-container">
        <h1>
          <img src="./mylogo.svg" alt="HACONA MATATA" />
          HAKONA MATATA
        </h1>
      </div>
      <div className="right">
        <nav >
          {/* <button className={props.currentPage === 'add' ? 'current' : ''} onClick={() => props.onNavigate('add')}>Add</button>
          <button className={props.currentPage === 'view' ? 'current' : ''} onClick={() => props.onNavigate('view')}>View</button> */}

          {/* location.pathname==='add'? "class 1 " : "class 2"  to add style to the nav links  */}

          <Link  to="/add" className={location.pathname === "/add" ? 'current' : ''}>
            Add
          </Link>
          <Link to="/view" className={location.pathname === "/view" ? 'current' : ''}>
            View
          </Link>
        </nav>
      </div>

    </header>

  );

};
export default Head;
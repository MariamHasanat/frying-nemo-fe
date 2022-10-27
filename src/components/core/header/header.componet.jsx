import React from 'react';
import './header.css';
import { Link} from "react-router-dom"
const Header = (props) => {
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <div className="img1"><img src="https://th.bing.com/th/id/OIP.tQeCr2wfItAJ6TtT45cd9QAAAA?w=171&h=180&c=7&r=0&o=5&pid=1.7"></img> <span>My RESTAURANT Nigga</span> </div>
        </h1>
      </div>
      <div className="right">
    {  <nav>
        
          <Link to="/add">

            <img className='add' src="https://th.bing.com/th/id/OIP.1TOk33fReQL3_tEO7VcKngHaHa?pid=ImgDet&w=159&h=159&c=7"></img>
          </Link>
       
          <Link to="/view">
            <img  className='view'src='https://th.bing.com/th/id/OIP.3XkYPHZ4zrcvQuJjfjY0cAAAAA?pid=ImgDet&w=150&h=150&c=7'></img>
          </Link>
        </nav>}
      </div>
    </header>
  );
};

export default Header;

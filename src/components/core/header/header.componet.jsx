import React from 'react';
import './header.css';

const Header = (props) => {
  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
        <div className="img1"><img src="https://th.bing.com/th/id/OIP.tQeCr2wfItAJ6TtT45cd9QAAAA?w=171&h=180&c=7&r=0&o=5&pid=1.7"></img> <span>My RESTAURANT Nigga</span> </div>
        </h1>
      </div>
      <div className="right">
        <nav>
          <button
            className={props.currentPage === 'Add' ? 'current' : ''}
            onClick={() => props.onNavigate('Add')}
          >
            Add
          </button>
          <button
            className={props.currentPage === 'View' ? 'current' : ''}
            onClick={() => props.onNavigate('View')}
          >
            View
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

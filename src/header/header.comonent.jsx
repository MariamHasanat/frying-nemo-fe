import React from 'react'
import './header.css'
function Title(props) {
  return (
    <header
    className="webisteHeader">
    <div>
      <h1>FRYING NEMO</h1>
    </div>
    <div>
      <nav>
        <button onClick={()=> props.onNavigate('add')}>Add</button>
        <button onClick={()=> props.onNavigate('view')}>view</button>
      </nav>
    </div>
    </header>
  );
};

export default Title
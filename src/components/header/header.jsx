import './header.css'
import { Link, useLocation } from 'react-router-dom';
const Handel =(props)=>{
  const location = useLocation();
  return(
  <header className='handel-group'>
    <img className='img' src ='./fish-removebg-preview.png' />
    <h1>Seafood Restaurant</h1>
    
    <div>
   
        {/* <div>
          <a href="/add" >Add</a>
          </div>
        <div>< a href = "/view">View</a></div> */}
         <div>
          <Link to="/add"  className={ location.pathname ==="/add"?'current':"" }>Add</Link>
          </div>
        <div>< Link to  = "/view" className={ location.pathname ==="/view"?'current':"" }>View</Link ></div>
     
    </div>
  </header>
  );

  
};
export default Handel 
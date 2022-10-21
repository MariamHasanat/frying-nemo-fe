import { useEffect, useState } from 'react';
import Spinner from '../../components/common/spinner/spinner.componenr';
import MenuItem from './cards/menu-item/menu-item.component';
import './view.css' ;

const ViewPage = (props) => {
  const [loading , setLoading] = useState (true) ;
  const [items , setItems] = useState ([]) ;
  const getMenuItems = () =>{
    setLoading (true) ;
    setTimeout(() => {
      setItems (JSON.parse (localStorage.getItem ('menuItems') || '[]')) ;
      setLoading (false) ;
    }, 1000);
  } 
  useEffect (() => {
    getMenuItems() ;
    return (() => console.log ('Im out'))
  } , [])
  // const items = JSON.parse (localStorage.getItem ('menuItems') || '[]') ;
  return (
    <div className='view'>
      <h1 align = 'center'>View Menu Items</h1>
      {loading 
      ? <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner />
        </div>
      : <div className='items'>
      {
        items.map ((item , index) => <div key = {item.name + index}>
          <MenuItem  item = {item} />
        </div>) 
      }
      {/* <MenuItem value = {props.value}/> */}
    </div>
    }
      
    </div>
  );
};

export default ViewPage;

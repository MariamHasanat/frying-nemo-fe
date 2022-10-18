import { useState } from 'react';
import Item from '../../../components/item/items/item';
import './view.css'
const getMenuItem = ()=> JSON.parse(localStorage.menuItem||'[]')
const View =(props)=>{
  const [menuItem]=useState(getMenuItem);
  return(
  <div className='view-page'>
   <h1>View menu item </h1>
     <div className='view-container'>
       {menuItem.map((item,i) => <Item data={item} key ={item.name+i}/>)}
     </div>
  </div>
  );
}
export default View;
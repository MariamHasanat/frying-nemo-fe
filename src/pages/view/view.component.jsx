import { useState } from 'react';
import MenuItem from './cards/menu-item/menu-item.component';
import './view.css' ;

const ViewPage = (props) => {
  const getMenuItems = () => JSON.parse (localStorage.getItem ('menuItems') || '[]') ;
  const [items] = useState (getMenuItems()) ;
  // const items = JSON.parse (localStorage.getItem ('menuItems') || '[]') ;
  return (
    <div className='view'>
      <h1 align = 'center'>View Menu Items</h1>
      <div className='items'>
        {
          items.map ((item , index) => <div key = {item.name + index}>
            <MenuItem  item = {item} />
          </div>) 
        }
        {/* <MenuItem value = {props.value}/> */}
      </div>
    </div>
  );
};

export default ViewPage;

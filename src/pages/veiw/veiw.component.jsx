import './veiw.css';
import { useState } from 'react';
import Item from '../../components/item/item.component';
const getMenuitems = () =>JSON.parse(localStorage.menuItems || '[]');
const Addveiw = (props) => {
  /**
   *@type {[Array , Function]} Loading
   */ 
  const [menuItem] = useState(getMenuitems());
  return (
    <div>
      <h1>Add a new item</h1>
     <div className="npm ">
      {
  menuItem.map((item,index) => <Item data = {item} key ={item.name + index}/> )
      }
     </div>
    </div>
  );
};

export default Addveiw;
import './view.css';
import Items from '../view/item/item.component';
import { useState } from "react";
const getMenu = ()=>JSON.parse(localStorage.menuItems|| '[]');
const ViewPage = (props) => {
  /**
   * @type {{Array,Function}}
   * 
   */
  const[menuItems]=useState(getMenu());
  return (
    <div className="view-page">
      <h1>View All Menu Items</h1>
      <div className="item">
        {
          menuItems.map((item,index )=> <Items data={item} key={item.name + index}/>)
        }
      </div>
    </div>
  );
};

export default ViewPage;

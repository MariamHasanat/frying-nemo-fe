import './view.css';
import React, { useState } from 'react';
import Item from './item/item.component';

const getMenuItems = () => JSON.parse(localStorage.MenuItems || '[]');


const ViewPage = (props) => {
  /**
   * @type {{Array,Function}} loading
   */
  const  [menuItems ]= useState(getMenuItems());
  return (
    <div className="view-page">
      <h1> view menu items </h1>
      <div className='item-container'>
        {
          menuItems.map((item ,index)=> <Item data={item} key={item.name}/>)
        }

      </div>
    </div>
  );
};

export default ViewPage;
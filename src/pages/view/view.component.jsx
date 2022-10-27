import './view.css';
import React, { useEffect, useState } from 'react';
import Item from './item/item.component';
import Input from '../../components/common/input/input.component';

const getMenuItems = () => JSON.parse(localStorage.MenuItems || '[]');


const ViewPage = (props) => {
  /**
   * @type {{Array,Function}} loading
   */
//   useEffect(()=>{
// alert("welcome");
//   },[]);
  const  [menuItems ]= useState(getMenuItems());
  const [searchTerms,setsearchTerms]=useState("");
  const filterdItems = menuItems.filter(item =>{ return item.name.toLowerCase().includes(searchTerms.toLowerCase().trim())});
  return (
    <div className="view-page">
      <h1> view menu items </h1>

      <Input type='search'
      value={searchTerms}
      placeholder="search"
      onChange={e=> setsearchTerms(e.target.value)}
      />


      <div className='item-container'>
        {
        filterdItems.map((item ,index)=> <Item data={item} key={item.name}/>)
        }

      </div>
    </div>
  );
};

export default ViewPage;
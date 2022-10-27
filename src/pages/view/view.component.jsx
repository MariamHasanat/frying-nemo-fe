import './view.css';
import React, { useEffect, useState } from 'react';
import Item from './item/item.component';
import Input from '../../components/common/input/input.component';

const getMenuItems = () => JSON.parse(localStorage.MenuItems || '[]');
/**
 * @type {Array<{
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */
const initialItems = [];

const ViewPage = (props) => {
  /**
   * @type {{Array,Function}} loading
   */
  //   useEffect(()=>{
  // alert("welcome");
  //   },[]);
  
  const [menuItems, setMenuItems] = useState(initialItems);
  const [searchTerms, setsearchTerms] = useState("");
  const filterdItems =
    menuItems.filter(item => {
  /**
  * 
  * @param {string }  str
  */
      const DoesMatch = str=>str.toLowerCase().includes(searchTerms.toLowerCase().trim());

      const match =(
      DoesMatch(item.name || 
        DoesMatch(item.description)||
        item.ingredients.some(ingredients=>DoesMatch))
      );
    
    });
  return (
    <div className="view-page">
      <h1> view menu items </h1>

      <Input type='search'
        value={searchTerms}
        placeholder="search"
        onChange={e => setsearchTerms(e.target.value)}
      />


      <div className='item-container'>
        {
         menuItems.map((item, index) => <Item data={item} key={item.name} />)
        }

      </div>
    </div>
  );
};

export default ViewPage;
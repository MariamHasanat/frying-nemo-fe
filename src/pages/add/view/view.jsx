import { useEffect, useState } from 'react';
import * as React from "react";
import { useSearchParams } from "react-router-dom";
import Input from '../../../components/common/input/input';
import Item from '../../../components/item/items/item';
import Spinner from '../../../components/spinner/spinner';
import './view.css';
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
const View = (props) => {
  const [menuItem, setMenuItem] = useState(initialItems);
  const [loading, setLoading] = useState(true);
  // const [Search, SetSearch] = useState('');
  const [param,SetParam]= useSearchParams(); 
  const searchFromUrl=param.get('search')||'';
  console.log(searchFromUrl);
  // const setItemSearchInLocalStoreg=(value)=>{
  //   localStorage.setItem("the informathion search",value);
  //   SetSearch(value);

  // }


  const filterItem = menuItem.filter(item => {
    console.log(item)
    const dose = str=>str.toLowerCase().includes(searchFromUrl.toLowerCase().trim());//function ببعت الو يلي جواتو اخنصار
    
    const match=(
      dose(item.name)||//ممكن اكتب هيك بختصر 
      item.description.toLowerCase().includes(searchFromUrl.toLowerCase().trim())||
      item.ingredients.some(ingredient=>ingredient.toLowerCase().includes(searchFromUrl.toLowerCase().trim()))
    )
    return match;
  }

  );
  const getMenuItem = () => {
    setLoading(true);

    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItem || '[]');
      setMenuItem(items);
      setLoading(false);
    }, 5000);

  };
  useEffect(() => {
    getMenuItem();
  }, []);
  return (
    <div className='view-page'>
      <h1>View menu item </h1>
      <Input
        type="search"
        value={searchFromUrl}
        placeholder="Search"
        onChange={e => {
          const newParam = new URLSearchParams(param);
          newParam.set('search',e.target.value);
          SetParam(newParam);
          }}
      ></Input>
      {loading ?
        <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        :
        <div className='view-container'>
          {filterItem.map((item, i) => <Item data={item} key={item.name + i} />)}
        </div>

      }
    </div>
  );
};
export default View;
import { useEffect, useState } from 'react';
import * as React from "react";
import { useSearchParams } from "react-router-dom";
import Input from '../../../components/common/input/input';
import Item from '../../../components/item/items/item';
import Spinner from '../../../components/spinner/spinner';
import './view.css';
import Select from '../../../components/common/select/select';
import FilterBar from '../../../components/filter-bar/filter-bar';
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
  const catogeryFromUrl=param.get('catogery')||'';
  console.log(searchFromUrl);
  // const setItemSearchInLocalStoreg=(value)=>{
  //   localStorage.setItem("the informathion search",value);
  //   SetSearch(value);[]F

  // }


  const filterItem = menuItem.filter(item => {
    console.log(item)
    const dose = str=>str.toLowerCase().includes(searchFromUrl.toLowerCase().trim());//function ببعت الو يلي جواتو اخنصار
    
    let match=(
      dose(item.name)||//ممكن اكتب هيك بختصر 
      item.description.toLowerCase().includes(searchFromUrl.toLowerCase().trim())||
      item.ingredients.some(ingredient=>ingredient.toLowerCase().includes(searchFromUrl.toLowerCase().trim()))
    )
    if(catogeryFromUrl){
      match=match&&(item.category==catogeryFromUrl);
      // true or false?
    }
    return match;
  }

  );
  const getMenuItem = () => {
    setLoading(true);

    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItem || '[]');
      setMenuItem(items);
      setLoading(false);
    }, 2000);

  };
  useEffect(() => {
    getMenuItem();
  }, []);
  return (
    <div className='view-page'>
      <h1>View menu item </h1>
      <FilterBar  
      searchFromUrl={searchFromUrl} 
      param={param} 
      SetParam={SetParam} 
      catogeryFromUrl={catogeryFromUrl}
      >
      </FilterBar >
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
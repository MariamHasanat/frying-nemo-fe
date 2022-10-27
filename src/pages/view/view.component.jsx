import { useEffect, useState } from 'react';
import Input from '../../components/common/input/input.component';
import Spinner from '../../components/common/spinner/spinner.componenr';
import MenuItem from './cards/menu-item/menu-item.component';
import './view.css' ;

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
  const [loading , setLoading] = useState (true) ;
  const [items , setItems] = useState (initialItems) ;
  const [searchTerms , setSearchTerms] = useState ('') ;
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

  const checkIngredient = (ingredients) => {
    let ingredientFound = false ;
    for (let idx=0 ; idx<ingredients.length ; idx++) {
      if (ingredients[idx].toLowerCase().includes (searchTerms))
        ingredientFound = true ;
    }
    return ingredientFound ;

  }
  // console.log (searchTerms)
  const filteredIetems = items.filter (element => (
    element.name.toLowerCase().includes(searchTerms.toLowerCase().trim()) 
    || (element.catigory.toLowerCase().includes(searchTerms.toLowerCase().trim())) 
    || ( checkIngredient (element.ingredients)))) ;

  return (
    <div className='view'>
      <h1 align = 'center'>View Menu Items</h1>
      <Input type='search' value={searchTerms} onChange = {e => setSearchTerms (e.target.value)} placeholder = 'search'/>
      {loading 
      ? <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner />
        </div>
      : <div className='items'>
      {
        filteredIetems.map ((item , index) => <div key = {item.name + index}>
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

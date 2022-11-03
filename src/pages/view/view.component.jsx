import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from '../../components/common/input/input.component';
import Spinner from '../../components/common/spinner/spinner.componenr';
import MenuItem from './cards/menu-item/menu-item.component';
import FilterBar from './filter-bar/filter-bar.component';
import './view.css' ;

/**
 * @type {Array<{
 * name: string;
 * discription: string;
 * ingredients: string[];
 * price: number;
 * catigory: string;
 * image: string;
 * }>}
 */
const initialItems = [];

const ViewPage = (props) => {
  const [loading , setLoading] = useState (true) ;
  const [items , setItems] = useState (initialItems) ;
  //param is an instance of complex class (URLSearchParams) so I need to use get (name) to access spesific param 
  const [param , setParam] = useSearchParams() ;  
  const searchUsingURL = param.get ('searchTerms') || '' ;
  const categoryUsingURL = param.get ('category') || '' ;
  // console.log ('searchTerms param = ' , param.get('searchTerms')) ;
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
  
  const filteredIetems = items.filter (element => {
    const doesItMatch  = (value) => value.toLowerCase().includes(searchUsingURL.toLowerCase().trim())
    let match = (
    doesItMatch (element.name) 
    || doesItMatch (element.discription) 
    || element.ingredients.some (ingredient => doesItMatch (ingredient)) 
    // => i can use find function instead , but (some is better to use) 
    )
    // console.log('categoryUsingURL' , categoryUsingURL);
    if (categoryUsingURL) {
      match = match && element.catigory == categoryUsingURL ;
    }
    // && ((element.catigory == categoryUsingURL) && categoryUsingURL)
    return match ;
  }) ;

  return (
    <div className='view'>
      <h1 align = 'center'>View Menu Items</h1>
      <FilterBar
        searchUsingURL = {searchUsingURL} 
        categoryUsingURL = {categoryUsingURL}
        param = {param}
        setParam = {setParam}
      />
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
    </div>
    }
    </div>
  );
};

export default ViewPage;


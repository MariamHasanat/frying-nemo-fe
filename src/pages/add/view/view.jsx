import { useEffect, useState } from 'react';
import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Input from '../../../components/common/input/input';
import Item from '../../../components/item/items/item';
import Spinner from '../../../components/spinner/spinner';
import './view.css';
import Select from '../../../components/common/select/select';
import FilterBar from '../../../components/filter-bar/filter-bar';
import { useContext } from 'react';
import { UserContext } from '../../../components/provider/provider';
import { getQuantity } from '../../../util/util';

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
  const userContext = useContext(UserContext)
  // const [Search, SetSearch] = useState('');
  const [param, SetParam] = useSearchParams();
  const searchFromUrl = param.get('search') || '';
  const categoriesFromURL = param.getAll('category') || '';
  console.log(searchFromUrl);
  const[max,setMax]=useState();
  const[min,setMin]=useState();
  const navigate = useNavigate();
  // const setItemSearchInLocalStoreg=(value)=>{
  //   localStorage.setItem("the informathion search",value);
  //   SetSearch(value);[]F

  // }
 useEffect(()=>{
  if(!userContext.user?.id){
    navigate ('/login');
  }
 },[])

  const filterItem = menuItem.filter(item => {
    console.log(item);
    const dose = str => str.toLowerCase().includes(searchFromUrl.toLowerCase().trim());//function ببعت الو يلي جواتو اخنصار

    let match = (
      dose(item.name) ||//ممكن اكتب هيك بختصر 
      item.description.toLowerCase().includes(searchFromUrl.toLowerCase().trim()) ||
      item.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchFromUrl.toLowerCase().trim()))
    );
    if (categoriesFromURL.length) {
      match = match && (categoriesFromURL.includes(item.category));
    }
    if(min)
     match= match&&(item.price>= min);
     if(max)
     match= match&&(item.price<= max);
    return match;
  });
  /**
  * Set query string parameter.
  * @param {string} name Parameter name.
  * @param {string | string[]} value Parameter value.
  */
  const setParam = (name, value) => {
    const newParams = new URLSearchParams(param);

    newParams.delete(name);

    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item));
    } else if (value.trim()) {
      newParams.set(name, value.trim());
    }

    SetParam(newParams);
  };


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
        setParam={setParam}
        categoriesFromURL={categoriesFromURL}
        setMax={setMax}
        setMin={setMin}
      >
      </FilterBar >
      {
        loading
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
          : (
            <div className="items-container">
              {
                filterItem.length
                  ? filterItem.map((item, index) => 
                  <Item  
                   data={item}
                    key={item.name + index} 
                    dispatch={props.dispatch} 
                    cartQuantity={getQuantity(item.id,props.cart)}
                    />
                    )
                  
                    : (
                    <div className="no-results">
                      <img src="./frustrated-realistic.jpg" alt="No results" />
                      <p>No results found</p>
                    </div>
                  )
              }
            </div>

          )


      }
    </div>
  );
};
export default View;
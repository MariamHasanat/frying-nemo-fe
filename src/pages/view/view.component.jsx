import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../../components/core/spinner.component';
import Item from '../../components/item/item.component';
import './view.css';
import FilterBar from './filter-bar/filter-bar.component';
/**
 * @type {Array<{
 * name: string;
 * Description: string;
 * Ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */
const initialItems = [];

const ViewPage = (props) => {
  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const price = params.get("price") || '';
  const searchTermsFromURL = params.getAll('searchTerms') || '';
  const categoryFromURL = params.getAll('category') || '';
  const[min,setMin]=useState("");
  const[max,setMax]=useState("");
  const maxFromURL = params.get("max") || '';
  const minFromURL = params.get("min") || '';


  console.debug('searchTerms =', searchTermsFromURL);
  const getMenuItems = () => {
    setLoading(true);

    // Run the code inside after 1000 milliseconds (1 Second)
    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItems || '[]');
      setMenuItems(items);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  const filteredItems = menuItems.filter(item => {

    /**
     * Check if search terms are somewhere inside given string.
     * @param {string} str 
     */
    const DoesItMatch = str =>
      str.toLowerCase().includes(
        searchTermsFromURL.toString().toLowerCase().trim()
      );

    let Match = (
      DoesItMatch(item.name) ||
      DoesItMatch(item.Description) ||
      item.Ingredients.some(Ingredient => DoesItMatch(Ingredient))
    );
    if (categoryFromURL) {
      Match = Match && (item.category === categoryFromURL);
    }
    if (maxFromURL && minFromURL) {
      Match = Match && (item.price >= minFromURL && item.price <= maxFromURL);

    }
    if(price)
    {
      Match = Match && (item.price >= price && item.price <= parseInt(price,0));
    }
    
    return Match;
  });
  /**
     * Set query string parameter.
     * @param {string} name Parameter name.
     * @param {string | string[]} value Parameter value.
     */
  const setParam = (name, value) => {
    const newParams = new URLSearchParams(params);

    newParams.delete(name);

    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item));
    } else if (value.trim()) {
      newParams.set(name, value.trim());
    }

    setParams(newParams);
  };

  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <FilterBar
        searchTermsFromURL={searchTermsFromURL}
        categories={categoryFromURL}
        setParams={setParam}
      />



      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {
            filteredItems
            .map((item, index) => <Item data={item} key={item.name + index} />) 
              
          }
       
        </div>
      } 
    
    </div>
  );
};

export default ViewPage;;
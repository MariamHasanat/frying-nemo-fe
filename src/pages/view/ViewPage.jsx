import './viewpage.css';
import Card from './Card/Card';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../spinner/spinner.component';
import FilterBar from './filter-bar/FilterBar';

// const getMenuItems = () => JSON.parse(localStorage.getItem('menuItem') || '[]');
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
  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();

  const searchFromURL = params.get('search') || '';
  const searchCategoryFromURL = params.get('category') || '';



  const getMenuItems = () => {
    setLoading(true);

    // Run the code inside after 1000 milliseconds (1 Second)
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem('menuItem') || '[]');
      console.log("items  ", localStorage.menuItem);
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
    const doesItMatch = str => str.toLowerCase().includes(searchFromURL.toLowerCase().trim());

    // console.log("item = ", item);

    let match = (
      doesItMatch(item.name) ||
      doesItMatch(item.description) ||
      item.ingredients.some(ingredient => doesItMatch(ingredient))
    );

    if (searchCategoryFromURL) {
      match = match && (item.category === searchCategoryFromURL);
    }

    return match;
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
    <div className="View-page">
      <FilterBar
        searchFromURL={searchFromURL}
        searchCategoryFromURL={searchCategoryFromURL}
        params={params}
        setParam={setParam}
      />
      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {
            filteredItems.map((item, index) => <Card data={item} key={item.name + index} />)
          }

        </div>
      }
    </div>
  );
};

export default ViewPage;
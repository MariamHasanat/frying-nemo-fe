import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import FilterBar from './filter-bar/filter-bar.component';
import Item from '../../components/item/item.component';
import './veiw.css';

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

const Addveiw = (props) => {
  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const searchTermsFromURL = params.get('searchTerms') || '';
  const categoriesFromURL = params.getAll('category') || '';

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
    const doesItMatch = str => str.toLowerCase().includes(searchTermsFromURL.toLowerCase().trim());

    let match = (
      doesItMatch(item.name) ||
      doesItMatch(item.descreption) ||
      item.ingredients.some(ingredient => doesItMatch(ingredient))
    );

    if (categoriesFromURL.length) {
      match = match && (categoriesFromURL.includes(item.category));
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
    } else if (value) {
      newParams.set(name, value.trim());
    }

    setParams(newParams);
  };

  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <FilterBar
        searchTerms={searchTermsFromURL}
        categories={categoriesFromURL}
        setParam={setParam}
      />
      {
       
            <div className="items-container">
              {
                filteredItems.length
                  ? filteredItems.map((item, index) => <Item data={item} key={item.name + index} />)
                  : (
                    <div className="no-results">
                      <p>No results found</p>
                    </div>
                  )
              }
            </div>
          
      }
    </div>
  );
};

export default Addveiw;

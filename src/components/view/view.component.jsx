import { useState } from 'react';
import Item from '../menu-item/menu-item.component';
import './view.css';
import { useEffect } from 'react';
import Spinner from '../spinner/spinner.component';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../filter-bar/filter-bar.component';


/**
 * @type {Array<{
 *  * id: number;
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */
const initialItems = [];

const getMenuItems = () => JSON.parse(localStorage.menuItem || '[]');

const ViewPage = (props) => {
  /**
   * @type {[Array, Function]} Loading
   */
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useSearchParams();

  const search = params.get('search') || '';
  const categoriesFromURL = params.getAll('category') || '';
  const minPrice = params.get('Min') || '';
  const maxPrice = params.get('Max') || '';


  console.log('search params = ', search);

  const getMenuItems = () => {
    setLoading(true);

    // Run the code inside after 1000 milliseconds (1 Second)
    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItem || '[]');
      setMenuItems(items);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  const filteredItems = menuItems.filter(item => {
    /**
     * check if search terms are somewhere inside given string.
     * @param {string} str
     */
    const isMatch = str => str.toLowerCase().includes(search.toLowerCase().trim());

    let match = (
      isMatch(item.name) ||
      isMatch(item.description) ||
      item.ingredients.some(ingredient => isMatch(ingredient))
    );

    if (categoriesFromURL.length) {
      match = match && (categoriesFromURL.includes(item.category));
    }

    if (minPrice && maxPrice) {
      match = match && (item.price >= minPrice && item.price <= maxPrice);
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
    <div className="view-page">
      <h1>View Menu Items</h1>
      <FilterBar
        searchTerms={search}
        categories={categoriesFromURL}
        setParam={setParam}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <br />

      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {filteredItems.length === 0
            ?
            <div >
              <img className='NFimg' alt='' src="https://media.istockphoto.com/vectors/upset-magnifying-glass-vector-illustration-vector-id1038232966?k=20&m=1038232966&s=612x612&w=0&h=32LDIxPK4zbWwukV_b1JTlzdkiLgZPPFPNNBQfvSrGU=" />
              <h2 className='NFtext'>No Menue Items Found!</h2></div>
            : filteredItems.map((item, index) => <Item data={item} key={item.name + index} />)
          }
        </div>
      }


    </div>

  );
};

export default ViewPage;
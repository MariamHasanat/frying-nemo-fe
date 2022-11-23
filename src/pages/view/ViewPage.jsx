import { UserContext } from '../../components/add/form/provider/UserProvider.jsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Spinner from '../spinner/spinner.component';
import FilterBar from './filter-bar/FilterBar';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import Card from './Card/Card';
import './viewpage.css';
import { CartContext } from '../../components/add/form/provider/CartProvider.jsx';

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

const ViewPage = () => {

  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  const searchFromURL = params.get('search') || '';
  const navigate = useNavigate();
  const categoriesFromURL = params.getAll('category') || '';
  const minFromURL = params.get('min') || '';
  const maxFromURL = params.get('max') || '';

  const getCartQuntity = (id) => {
    const currentItem = cartContext.cart.find(element => (id === element.meal.id))
    if(currentItem) {
      return currentItem.quantity;
    } else {
      return 0;
    }
  }

  const getMenuItems = () => {
    setLoading(true);
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem('menuItems') || '[]');
      setMenuItems(items);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
   
    if (!userContext.user?.id) {
      navigate('/login' , {replace : false});
    }
    getMenuItems();
  }, []);

  const filteredItems = menuItems.filter(item => {
    /**
     * Check if search terms are somewhere inside given string.
     * @param {string} str 
     */
    const doesItMatch = str => str.toLowerCase().includes(searchFromURL.toLowerCase().trim());

    let match = (
      doesItMatch(item.name) ||
      doesItMatch(item.description) ||
      item.ingredients.some(ingredient => doesItMatch(ingredient))
    );

    if (categoriesFromURL.length) {
      match = match && categoriesFromURL.includes(item.category);
    }

    if (minFromURL) {
        match = match && item.price >= minFromURL
    }

    if (maxFromURL) {
      match = match && item.price <= maxFromURL
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
        search={searchFromURL}
        categories={categoriesFromURL}
        min={minFromURL}
        max={maxFromURL}
        params={params}
        setParam={setParam}
        dispatch={cartContext.dispatch}
      />
      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {
            filteredItems.map((item, index) => <Card 
             data={item}
             key={item.name + index} 
             dispatch={cartContext.dispatch}
             getCartQuntity={getCartQuntity(item.id)}
             />)
          }

        </div>
      }
    </div>
  );
};

export default ViewPage;

import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ItemCard from '../../components/item-card/item-card.component';
import FilterBar from '../../components/view/filter-input.component';
import './view.css';
import { useContext } from 'react';
import { UserContext } from '../../components/providers/user-provider';
import { getItemQuantity } from '../../utilities/getItemQuantity';
const getMenuItems = () => JSON.parse(localStorage.getItem('menuItems') || '[]');

/**
 * @type {Array<{
 * id: number;
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

  const userContext = useContext(UserContext);
  const [menuItems, setMenuItems] = useState(initialItems);
  const [params, setParams] = useSearchParams();
  const searchParamFromURl = params.get('search') || '';
  const categoryFromURl = params.getAll('category') || '';

  const navigate = useNavigate();
  useEffect(() => {
    setMenuItems(getMenuItems());
  }, []);

  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }
  });

  // const getItemQuantity = (id) => {
  //   const currentItem = props.cart.find(item => item.meal.id === id);
  //   if (currentItem) {
  //     return currentItem.quantity;
  //   }
  //   return 0;
  // };


  const filteredItems = menuItems.filter(e => {

    /**
     * 
     * @param {String} str 
     * @returns 
     */
    const doesItMatch = str => str.toLowerCase().includes(searchParamFromURl.toLowerCase().trim());

    let match = (
      doesItMatch(e.name) ||
      doesItMatch(e.description) ||
      e.ingredients.some(ingredient => doesItMatch(ingredient)));

    if (categoryFromURl.length) {
      match = match && (categoryFromURl.includes(e.category));
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
      <h1>All Menu Items</h1>

      <FilterBar
        searchParamFromURl={searchParamFromURl}
        categories={categoryFromURl}
        setParam={setParam}

      />

      <div className='items-container'>

        {
          filteredItems.map(
            (item, index) => {
              return (
                <ItemCard
                  item={item}
                  key={item + index}
                  dispatch={props.dispatch}
                  getItemQuantity={getItemQuantity(props.cart, item.id)}
                />
              );

            })
        }
      </div>
    </div>
  );
};

export default View;
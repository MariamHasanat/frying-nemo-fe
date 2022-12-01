
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemCard from '../../components/view/item-card/item-card.component';
import FilterBar from '../../components/view/filter-bar/filter-input.component';
import './view.css';
import { useContext } from 'react';
import { getItemQuantity } from '../../utilities/get-item-quantity';
import { CartContext } from '../../components/providers/cart-provider';
import { getItems } from '../../services/items';
// const getMenuItems = () => JSON.parse(localStorage.getItem('menuItems') || '[]');

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


/**
 * 
 * @param {{cart: []; 
 * dispatch: React.DispatchWithoutAction;
 * }} props 
 * @returns 
 */
const View = (props) => {
  const cartContext = useContext(CartContext);

  const [menuItems, setMenuItems] = useState(initialItems);
  const [params, setParams] = useSearchParams();
  const searchParamFromURl = params.get('search') || '';
  const categoryFromURl = params.getAll('category') || '';

  // useEffect(() => {
  //   getItems().then(items => {
  //     setMenuItems(items);
  //   });
  // }, []);

  useEffect(() => {
    const getData = async () => {
      setMenuItems(await getItems());
    };
    getData();
  }, []);


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
                  dispatch={cartContext.dispatch}
                  itemQuantity={getItemQuantity(cartContext.cart, item.id)}
                />
              );

            })
        }
      </div>
    </div>
  );
};

export default View;
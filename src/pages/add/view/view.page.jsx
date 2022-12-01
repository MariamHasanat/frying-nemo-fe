import Item from '../../../components/view/item/item/item.component';
import './view.css';
import { useState } from 'react';
import FilterBar from '../../../components/view/item/item/filter-bar/filter-bar.component';
import { useEffect } from 'react';
import Spinner from '../../../components/core/header/spinner/spinner.component';
import { useSearchParams} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../components/provider/cart.provider';
import { getCartQuantity } from '../../../utils/cart';
import getItems from '../../../services/item';

        

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

const ViewPage = () => {
  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
 const cartContext = useContext(CartContext);
  const searchTermsFromURL = params.get('searchTerms') || '';
  const categoriesFromURL = params.getAll('category') || '';

  const getMenuItems = async () => {
    setLoading(true);
    const items = await getItems();
    setMenuItems(items);
    setLoading(false);

    // Run the code inside after 1000 milliseconds (1 Second)
    /*setTimeout(() => {
      const items = JSON.parse(localStorage.menuItems || '[]');
      setMenuItems(items);
      setLoading(false);
    }, 1000);
  };*/
 

};

  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
   /* if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }*/

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
      doesItMatch(item.description) ||
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
    } else if (value.trim()) {
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
        loading
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
          : (
            <div className="items-container">
              {
                filteredItems.length
                  ? filteredItems.map((item, index) => 
                  <Item
                  data={item}
                  key={item.name + index}
                  dispatch={cartContext.dispatch}
                  cartQuantity={getCartQuantity(item.id, cartContext.cart)}
                />
                  )
                  : (
                    <div className="no-results">
                      <img src="./frustrated-realistic.png" alt="No results" />
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

export default ViewPage;






import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserContext } from '../../components/provider/user-provider.component';
import { CartContext } from '../../components/provider/cart-provider.component';
import Spinner from '../../components/core/spinner/spinner.component';
import FilterBar from '../../components/view/filter-bar/filter-bar.component';
import Item from '../../components/view/item/item.component';
import './view.css';
import { getCartQuantity } from '../../utilities/get-item-quantity';
import { getItem, getItems } from '../../services/item';

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
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const searchTermsFromURL = params.get('searchTerms') || '';
  const categoriesFromURL = params.getAll('category') || '';

  const getMenuItems = async () => {
    setLoading(true);
    const items = await getItems();

    setMenuItems(items);
    setLoading(false);
  };

  useEffect(() => {
    if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }

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
                  ? filteredItems.map((item, index) => (
                    <Item
                      data={item}
                      key={item.name + index}
                      dispatch={cartContext.dispatch}
                      cartQuantity={getCartQuantity(item.id, cartContext.cart)}
                    />
                  ))
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

export default ViewPage;;

import { useContext, React } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../../components/core/spinner.component';
import Item from '../../components/item/item.component';
import './view.css';
import FilterBar from './filter-bar/filter-bar.component';
import { CartContext } from '../../components/providers/cart-provider.component';
import { UserContext } from '../../components/providers/user-provider.component';
import { getCartQuantity } from '../../utils/cart';
import { getItems } from '../../services/item';

import useFilterItems from '../../Hooks/filter-items.hook';


/**
 * @type {Array<{
 * id:number;
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
  console.log("from view pGE ");
  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext);

  // const searchTermsFromURL = params.get('searchTerms') || '';
  // const categoryFromURL = params.getAll('category') || '';
  // const [min, setMin] = useState("");
  // const [max, setMax] = useState("");

  const navigate = useNavigate();
  const getMenuItems = async () => {
    setLoading(true);
    const items = await getItems();
    setMenuItems(items);
    setLoading(false);

    // Run the code inside after 1000 milliseconds (1 Second)
    // setTimeout(() => {
    //   const items = JSON.parse(localStorage.menuItems || '[]');
    //   setMenuItems(items);
    //   setLoading(false);
    // }, 1000);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  useEffect(() => {
    if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }

  });

  const filteredItems = useFilterItems(menuItems);
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
       value={params.get('searchTerms') || ''}
        categories={params.getAll('category') || ''}
        setParams={setParam}

      />



      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {
            filteredItems
              .map((item, index) =>
                <Item data={item}
                  key={item.name + index}
                  dispatch={cartContext.dispatch}
                  cartQuantity={getCartQuantity(item.id, cartContext.cart)} />)

          }

        </div>
      }

    </div>
  );
};

export default ViewPage;;
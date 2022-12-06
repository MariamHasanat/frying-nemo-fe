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
import useFilterItem from '../../../hooks/items.hook';

        

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
    fetch('https://6385ec80beaa6458266d44f1.mockapi.io/nemo/menu/')
    .then(async (res) => {
      const jsonRes = await res.json();
      setMenuItems(jsonRes);
    })
    .catch((error) => {
      alert(error.toString());
    });
  // const items = JSON.parse(localStorage.menuItems || '[]');
  setLoading(false);

 

};

  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
   /* if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }*/

    getMenuItems();
  }, []);

  const filteredItems = useFilterItem(menuItems);


  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <FilterBar />
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






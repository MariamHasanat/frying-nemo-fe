import Item from './item/item.jsx';
import './viewPage.css';
import Spinner from '../../components/spinner/spinner.jsx';
import { useState, useEffect, useContext } from 'react';
// import { useSearchParams } from 'react-router-dom';
import FilterBar from './filter-bar/filter.bar.component.jsx';
import { CartContext } from '../../components/providers/cart-provider';
import { getCartQuantity } from '../../utils/cart';
import { getItems } from '../../services/items.js';
import useFilteredItems from '../../hooks/item.hooks.js';
import useToggle from '../../hooks/toggle.hook';
const initialItems = [];

const ViewPage = (props) => {
  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [isTourist, setIsTourist] = useToggle(false);

  const cartContext = useContext(CartContext);

  const getMenuItems = () => {
    setLoading(true);

    // Run the code inside after 1000 milliseconds (1 Second)
    setTimeout(async () => {

      const items = await getItems();
      setMenuItems(items);

      setLoading(false);
    }, 1000);
  };



  useEffect(() => {
    getMenuItems();
  }, []);

  const filteredItems = useFilteredItems(menuItems, isTourist);

  return (
    <div className="view-page">
      <div className='title'>

        <h1>View Menu Items</h1>
        <FilterBar isTourist={isTourist} setIsTourist={setIsTourist} />

      </div>
      {
        loading
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
          : (
            <div className="items-container">
              {
                filteredItems?.length
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
                      <img src="https://img.freepik.com/premium-vector/cute-cartoon-pensive-beautiful-girl-drinking-coffee-cafe_533043-4.jpg?w=2000" alt="No results" />
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
import Item from './item/item.jsx';
import './viewPage.css';
import Spinner from '../../components/spinner/spinner.jsx';
import { useContext } from 'react';
import FilterBar from './filter-bar/filter.bar.component.jsx';
import { CartContext } from '../../components/providers/cart-provider';
import { getCartQuantity } from '../../utils/cart';
import useGetItems from '../../hooks/menu/add-item.hook/get-item.hook.js';


const ViewPage = (props) => {
  const { menuItems, loading } = useGetItems();
  const cartContext = useContext(CartContext);

  return (
    <div className="view-page">
      <div className='title'>

        <h1>View Menu Items</h1>
        <FilterBar />

      </div>
      {
        loading
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
          : (
            <div className="items-container">
              {
                menuItems?.length
                  ? menuItems.map((item, index) => (
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
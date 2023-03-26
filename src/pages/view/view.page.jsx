import { useContext } from 'react';
import './view.css';
import { getCartQuantity } from '../../utils/cart';

import Spinner from '../../components/core/spinner/spinner.component';
import FilterBar from '../../components/view/filter-bar/filter-bar.component';
import Item from '../../components/view/item/item.component';
import { CartContext } from '../../components/providers/cart-provider.component';

import useGetItems from '../../hooks/menu/get-items.hook';

const ViewPage = () => {
  const { loading, menuItems } = useGetItems();
  const cartContext = useContext(CartContext);

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
                menuItems.length
                  ? menuItems.map((item, index) => (
                    <Item
                      data={item}
                      key={item.name + index}
                      dispatch={cartContext.dispatch}
                      cartQuantity={getCartQuantity(item._id, cartContext.cart)}
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

export default ViewPage;
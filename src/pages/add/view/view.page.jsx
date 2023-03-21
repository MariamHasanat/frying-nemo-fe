import Item from '../../../components/view/item/item/item.component';
import './view.css';
import {  useContext } from 'react';
import FilterBar from '../../../components/view/item/item/filter-bar/filter-bar.component';
import Spinner from '../../../components/core/header/spinner/spinner.component';
import { CartContext } from '../../../components/provider/cart.provider';
import { getCartQuantity } from '../../../utils/cart';
import useGetItem from '../../../hooks/menu/get-items.hook';



        





const ViewPage = () => {
  const { loading, menuItems } = useGetItem();
 const cartContext = useContext(CartContext);
  



  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <FilterBar/>
      {
        loading
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
          : (
            <div className="items-container">
              {
                menuItems.length
                  ? menuItems.map((item, index) => 
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






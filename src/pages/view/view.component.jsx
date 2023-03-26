import { useEffect, useState, useContext } from 'react';
import './view.css';
import Item from '../../components/view/item/item.component';
import Spinner from '../../components/spinner/spinner.component';
import FilterBar from '../../components/view/filter-bar/filter-bar.component';
import pic from '../../assets/illustrations/frustrated-realistic .png';
import { getCartQuantity } from '../../utils/cart';
import { CartContext } from '../../components/providers/cart-provider.component';
import { fetchItems } from '../../services/items';
import useFilteredItems from '../../hooks/filter-items.hook';
import useToggle from '../../hooks/common/toggle.hook';
import useGetItems from '../../hooks/menu/get-items.hook';

const ViewPage = () => {

  //const [loading, setLoading] = useState(false);
  const [isTourist, toggleIsTourist] = useToggle(false);
  const { loading, menuItems } = useGetItems();
  const cartContext = useContext(CartContext);

  

  const { filteredItems, setMin, setMax } = useFilteredItems(menuItems, isTourist);

  return (
    <div className="view-page">
      <h1>View Menu Items</h1>

      <FilterBar isTourist={isTourist} toggleIsTourist={toggleIsTourist} setMin={setMin}
        setMax={setMax} />
      {
        loading
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
          : (
            <div className="items-container">
              {
                (menuItems.length > 0)
                  ? menuItems.map((item, index) => {
                    return <Item
                      data={item}
                      key={item.name + index}
                      dispatch={cartContext.dispatch}
                      cartQuantity={getCartQuantity(item.id, cartContext.cart)}
                    />;
                  })
                  : (
                    <div className="no-results">
                      <img src={pic} alt="No results" />
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

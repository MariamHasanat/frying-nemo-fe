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
  const [isTourist, toggleIsTourist] = useToggle(false);
  const cartContext = useContext(CartContext);


  const getMenuItems = async () => {
    setLoading(true);
    const items = await fetchItems();
    setMenuItems(items);
    setLoading(false);

  };

  useEffect(() => { getMenuItems(); }, []);

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
               ( filteredItems.length > 0)
                  ? filteredItems.map((item, index) => {
                   return <Item
                      data={item}
                      key={item.name + index}
                      dispatch={cartContext.dispatch}
                      cartQuantity={getCartQuantity(item.id, cartContext.cart)}
                    />
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

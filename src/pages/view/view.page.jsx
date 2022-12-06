import { useEffect, useState } from 'react';
import ItemCard from '../../components/view/item-card/item-card.component';
import FilterBar from '../../components/view/filter-bar/filter-input.component';
import './view.css';
import { useContext } from 'react';
import { getItemQuantity } from '../../utilities/get-item-quantity';
import { CartContext } from '../../components/providers/cart-provider';
import { getItems } from '../../services/items';
import Spinner from '../../components/core/spinner/spinner';
import useFilteredItems from '../../hooks/filter-items.hook';
// const getMenuItems = () => JSON.parse(localStorage.getItem('menuItems') || '[]');

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


/**
 * 
 * @param {{cart: []; 
 * dispatch: React.DispatchWithoutAction;
 * }} props 
 * @returns 
 */
const View = () => {
  const cartContext = useContext(CartContext);
  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      setMenuItems(await getItems());
      setLoading(false);
    };
    getData();
  }, []);


  const filteredItems = useFilteredItems(menuItems);

  return (
    <div className="view-page">
      <h1>All Menu Items</h1>

      <FilterBar />

      {
        loading ? <Spinner /> :
          <>
            <div className='items-container'>
              {
                filteredItems.map(
                  (item, index) => {
                    return (
                      <ItemCard
                        item={item}
                        key={item + index}
                        dispatch={cartContext.dispatch}
                        itemQuantity={getItemQuantity(cartContext.cart, item.id)}
                      />
                    );
                  })
              }
            </div>
          </>
      }

    </div>
  );
};

export default View;
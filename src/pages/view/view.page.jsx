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
import useToggle from '../../Hooks/toggle.hook';

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
  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext);
  const [isTourist, toggleIsTouriest] = useToggle(false);
  const filteredItems = useFilterItems(menuItems,isTourist);


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






  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <FilterBar 
        isTourist={isTourist}
        toggleIsTouriest={toggleIsTouriest}
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
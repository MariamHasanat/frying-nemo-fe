import './view.css';
import Items from '../view/item/item.component';
import React, { useState, useEffect, useContext } from "react";
import FilterBar from './filture/filter-bar.companent';
import { getCartQuantity } from '../../utilit/cart';
import { CartContext } from '../../components/provider/cart-provider.component';
import { getItems } from '../../data/items';
import useFilterItems from '../../hook/filter-item.hook';
import useToggle from '../../hook/tourist.hook';

const ViewPage = () => {
  /**
 * @type {Array<>}
   */
  const initialItems = [];
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState(initialItems);
  const cartContext = useContext(CartContext);
  const { toggle: toggleIsTourist, value: isTourist } = useToggle(false);

  /**
    * @param {string} value
    */
  const getMenuItems = async () => {
    setLoading(true);
    const data = await getItems();
    setMenuItems(data);
    setLoading(false);
    // Run the code inside after 1000 milliseconds (1 Second)
    // setTimeout(() => {
    //   const items = JSON.parse(localStorage.menuItems || '[]');

    //   setMenuItems(item);
    //   setLoading(false);
    // }, 1000);
  };

  useEffect(() => {
    getMenuItems();
  }, []);


  const filterItem = useFilterItems(menuItems, isTourist);

  return (
    <div className="view-page">
      <h1>View All Menu Items</h1>
      <FilterBar isTourist={isTourist} toggleIsTourist={toggleIsTourist} />

      <div className="item">
        {
          filterItem
            .map((item, index) => <Items data={item} key={item.name + index} dispatch={cartContext.dispatch} cartQuantity={getCartQuantity(item.id, cartContext.cart)} />)
        }
      </div>
    </div>
  );
};

export default ViewPage;

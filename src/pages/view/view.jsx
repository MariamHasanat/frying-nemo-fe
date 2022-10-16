
import { useState } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import './view.css';
const getMenuItems = () => JSON.parse(localStorage.getItem('menuItems') || '[]');
const View = () => {

  /**
   * @type {[Array, Function]}
   */
  const [menuItems, setMenuItems] = useState(getMenuItems());
  console.log(menuItems);
  return (
    <div className="view-page">
      <h1>All Menu Items</h1>

      {
        menuItems.map(
          item => {
            return (
              <ItemCard item={item} />
            );

          })
      }
    </div>
  );
};

export default View;
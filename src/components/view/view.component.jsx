import { useState } from 'react';
import Item from '../menu-item/menu-item.component';
import './view.css';

const getMenuItems = () => JSON.parse(localStorage.menuItem || '[]');

const ViewPage = (props) => {
  /**
   * @type {[Array, Function]} Loading
   */
  const [menuItems] = useState(getMenuItems());
  return (
    <div className='add-page'>
      <h1>ViewItems</h1>
      <div className='item-containers'>
        {
          menuItems.map((item, index) => <Item data={item} />)
        }
      </div>
    </div>
  );
};

export default ViewPage;
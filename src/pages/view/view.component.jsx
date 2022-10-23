import { useState } from 'react';
import Item from '../../components/view/item/item.component';
import './view.css';

const getMenuItems = () => JSON.parse(localStorage.menuItems || '[]');

const ViewPage = (props) => {
  /**
  * @type {[Array, Function]} Loading
  */
  const [menuItems] = useState(getMenuItems());

  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <div className="items-container">
        {
          menuItems.map((item, index) => <Item data={item} key={item.name + index} />)
        }
      </div>
    </div>
  );
};

export default ViewPage;
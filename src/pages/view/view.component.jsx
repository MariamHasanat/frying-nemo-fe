import { useState } from 'react';
import './view.css';
import Item from '../../components/view/item/item.component';

const getMenuItems = () => JSON.parse(localStorage.menueItems || '[]');

const ViewPage = (props) => {
  /**
   * @type {{Array , Function}} loading
   */
  const [menueItems] = useState(getMenuItems());

  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <div className="view-container">
        {
          menueItems.map((item, index) => <Item data={item} key={item.name + index} />)
        }
      </div>
    </div>
  );
};

export default ViewPage;

import { useState } from 'react';
import Item from '../menu-item/menu-item.component';
import './view.css';
import { useEffect } from 'react';
import Spinner from '../spinner/spinner.component';

const getMenuItems = () => JSON.parse(localStorage.menuItem || '[]');

const ViewPage = (props) => {
  /**
   * @type {[Array, Function]} Loading
   */
   const [menuItems, setMenuItems] = useState([]);
   const [loading, setLoading] = useState(true);
 
   const getMenuItems = () => {
    setLoading(true);

    // Run the code inside after 1000 milliseconds (1 Second)
    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItem || '[]');
      setMenuItems(items);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <div className="view-page">
      <h1>View Menu Items</h1>

      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {
            menuItems.map((item, index) => <Item data={item} key={item.name + index} />)
          }
        </div>
      }
    </div>

  );
};

export default ViewPage;
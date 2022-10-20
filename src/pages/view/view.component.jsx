import { useEffect, useState } from 'react';
import Spinner from '../../components/core/spinner/spinner.component';
import Item from '../../components/view/item/item.component';
import './view.css';


const ViewPage = (props) => {
  /**
   * @type {[Array, Function]} Loading
   */
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMenuItems = () => {
    setLoading(true);

    // Run the code inside after 1000 milliseconds (1 Second)
    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItems || '[]');
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

export default ViewPage;;
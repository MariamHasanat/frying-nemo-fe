import Item from '../../../components/view/item/item/item.component';
import './view.css';
import { useState } from 'react';

const getMenueItem = () => JSON.parse(localStorage.menuItems || '[]');


const ViewPage = () => {
  /**
   * @type {[Array, Function]} Loading
   */
  const [menueItems] = useState(getMenueItem());
  console.log(menueItems);
  const Menue = menueItems.map((item, index) =>
    <Item
      data={item} key={item.name + index}
    />);


  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <div>
        {
          Menue
        }
      </div>

    </div>
  );
};

export default ViewPage;

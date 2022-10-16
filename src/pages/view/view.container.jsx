import Item from './item/item.jsx';
import './viewContainerStyle.css';
import { useState } from 'react';

const getMenuItem = () => JSON.parse(localStorage.menuItems || '[]');

const ViewPage = (props) => {

  const [menuItems] = useState(getMenuItem());

  return (
    <div className='view-container'>
      <h1 className='h1'>View Menu Items</h1>
      <div className='items-container'>
        {
          menuItems.map((item, index) => <Item data={item} key={item.name + index} />)
        }
      </div>

    </div>
  );
};

export default ViewPage;
import './viewpage.css';
import Card from './Card/Card';
import { useState } from 'react';

const getMenuItems = () => JSON.parse(localStorage.getItem('menuItem') || '[]');

const ViewPage = (props) => {
  const [menuItems] = useState(getMenuItems());
  return (
    <div className="View-page">
      <div className="items-container">
        {
          menuItems.map((item, index) => (
              <Card data={item} key={item.name + index}/>
          ))
        }
      </div>
    </div>
  );
};

export default ViewPage;
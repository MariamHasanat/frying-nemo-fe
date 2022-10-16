import './view.css';
import { useState } from 'react';

const getMenuItems = () => JSON.parse(localStorage.menuItems || '[]');

const ViewPage = (props) => {

  const [menuItems, setMenuItems] = useState(getMenuItems());

  return (
    <div>
      <h1>View Items</h1>
      <div className='items-container'>
        {
          menuItems.map((item, index) => {
            console.log(item);
            return <div key={item.name + index} className="box">
              <img src={process.env.PUBLIC_URL + '/food1.jpg'}  height={300}/> 
              <p>New Item</p>
              <div><span>Name :</span> {item.name}</div>
              <div className='desc'><span>Description :</span> {item.description}</div>
              <div><span>Price :</span> {item.price}$</div>
              <div><span>Category :</span> {item.category}</div>
              <div><span>Ingredients : </span> 
              {item.ingredients.join(' | ')}
              </div>
            </div>;
          })
        }
      </div>
    </div>
  );
};

export default ViewPage;
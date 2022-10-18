import './view.css';
import { useEffect, useState } from 'react';

const ViewPage = (props) => {

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMenuItems = () => {

    setLoading(true);

    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItems || '[]');
      setMenuItems(items);
      setLoading(false);
    }, 3000);

  };

  // When the page rendered for the first time
  // if the array is empty will not be executed again
  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <div>
      <h1>View Items</h1>
      {loading && 
      <div className='loading'>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div>
          </div><div></div><div></div><div></div><div></div><div></div><div></div><div>
            </div></div>
        <div className='loading'>Loading ...</div>
      </div>
      }
      <div className='items-container'>
        {
          menuItems.map((item, index) => {
            return <div key={item.name + index} className="box">
              <div className="img">
                <img src={item.image} alt="food" height={400} />
              </div>
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
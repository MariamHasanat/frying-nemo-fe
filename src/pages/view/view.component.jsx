import './view.css';
import { useEffect, useState } from 'react';
import Input from '../../components/common/input/input-component';


/**
 * @type {Array<{
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */
const initialItems = [];

const ViewPage = (props) => {

  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(true);
  const [searchTerms, setSearchTerms] = useState("");

  const getMenuItems = () => {

    setLoading(true);

    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItems || '[]');
      setMenuItems(items);
      setLoading(false);
    }, 1000);

  };

  // When the page rendered for the first time
  // if the array is empty will not be executed again
  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <div>
      <h1>View Menu Items</h1>
      <Input type="search"
        value={searchTerms}
        onChange={e => setSearchTerms(e.target.value)}
        placeholder="Search" />
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
          menuItems
            .filter(item => {
              const match = (
                item.name.toLowerCase().includes(searchTerms.toLowerCase().trim()) ||
                item.description.toLowerCase().trim().includes(searchTerms.toLowerCase().trim()) ||
                item.ingredients.some(ingredient => {
                  return ingredient.toLowerCase().trim().includes(searchTerms.toLowerCase().trim());
                })
              );
              return match;
            })
            .map((item, index) => {
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
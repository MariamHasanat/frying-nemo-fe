import { useEffect, useState } from 'react';
import Input from '../../components/common/input/input.component';
import Spinner from '../../components/core/spinner/spinner.component';
import Item from '../../components/view/item/item.component';
import './view.css';

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
  const [loading, setLoading] = useState(false);
  const [searchTerms, setSearchTerms] = useState('');

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

  const filteredItems = menuItems.filter(item => {
    /**
     * Check if search terms are somewhere inside given string.
     * @param {string} str 
     */
    const doesItMatch = str => str.toLowerCase().includes(searchTerms.toLowerCase().trim());

    const match = (
      doesItMatch(item.name) ||
      doesItMatch(item.description) ||
      item.ingredients.some(ingredient => doesItMatch(ingredient))
    );

    return match;
  });

  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <Input
        type="search"
        value={searchTerms}
        onChange={e => setSearchTerms(e.target.value)}
        placeholder="Search"
      />
      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {
            filteredItems
              .map((item, index) => <Item data={item} key={item.name + index} />)
          }
        </div>
      }
    </div>
  );
};

export default ViewPage;;
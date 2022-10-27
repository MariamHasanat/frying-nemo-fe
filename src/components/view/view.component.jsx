import { useState } from 'react';
import Item from '../menu-item/menu-item.component';
import './view.css';
import { useEffect } from 'react';
import Spinner from '../spinner/spinner.component';
import Input from '../input/input.component';

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

const getMenuItems = () => JSON.parse(localStorage.menuItem || '[]');

const ViewPage = (props) => {
  /**
   * @type {[Array, Function]} Loading
   */
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerms, setSearchTerms] = useState('');

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

  const filteredItems = menuItems.filter(item => {
    /**
     * check if search terms are somewhere inside given string.
     * @param {string} str
     */
    const isMatch = str => str.toLowerCase().includes(searchTerms.toLowerCase().trim());

    const match = (
      isMatch(item.name) ||
      isMatch(item.description) ||
      item.ingredients.some(ingredient => isMatch(ingredient))
      )

return match;
  });

  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <Input
        type='search'
        value={searchTerms}
        onChange={e => setSearchTerms(e.target.value)}
        placeholder='search'
      />
      <br />

      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {filteredItems.length == 0
            ?
            <div >
              <img className='NFimg' src="https://media.istockphoto.com/vectors/upset-magnifying-glass-vector-illustration-vector-id1038232966?k=20&m=1038232966&s=612x612&w=0&h=32LDIxPK4zbWwukV_b1JTlzdkiLgZPPFPNNBQfvSrGU=" />
              <h2 className='NFtext'>No Menue Items Found!</h2></div>
            : filteredItems.map((item, index) => <Item data={item} key={item.name + index} />)
          }
        </div>
      }


    </div>

  );
};

export default ViewPage;
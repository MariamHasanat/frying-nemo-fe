import './view.css';
import Items from '../view/item/item.component';
import Input from '../input/input.component';
import { useState, useEffect } from "react";
const getMenu = () => JSON.parse(localStorage.menuItems || '[]');
const ViewPage = () => {
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
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState(initialItems);
  const [search, setSearch] = useState('');

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
  const filterItem = menuItems.filter(item => {
    /**
     * @param {string}str
     */
    const doesItemMatch = str=> str.toLowerCase().includes(search.toLowerCase().trim());
    const match =(
    doesItemMatch(item.name)||
    doesItemMatch(item.description)||
    item.ingredients.some(ingredient=>doesItemMatch(ingredient))
);
    return match;
  });
console.debug('items', menuItems, 'filtered', filterItem)
  return (
    <div className="view-page">
      <h1>View All Menu Items</h1>
      <Input type="search" placeholder='Search'value={search} onChange={e => setSearch(e.target.value)} />
      <div className="item" >
        {
          filterItem
          .map((item, index) => <Items data={item} key={item.name + index} />)
        }
      </div>
    </div>
  );
};

export default ViewPage;

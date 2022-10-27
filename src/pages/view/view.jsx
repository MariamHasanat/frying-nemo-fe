
import { useEffect, useState } from 'react';
import Input from '../../components/common/input/input.component';
import ItemCard from '../../components/item-card/item-card.component';
import './view.css';
const getMenuItems = () => JSON.parse(localStorage.getItem('menuItems') || '[]');

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

const View = () => {

  const [searchTerms, setSearchTerms] = useState('');

  const [menuItems, setMenuItems] = useState(initialItems);
  console.log(menuItems);

  useEffect(() => {
    setMenuItems(getMenuItems());
  }, []);

  /**
   * @param {String} str
   */
  const doesItMatch = str => str.toLowerCase().includes(searchTerms.toLowerCase().trim());
  const filteredItems = menuItems.filter(e => {
    return doesItMatch(e.name) ||
      doesItMatch(e.description) || e.ingredients.some(e => doesItMatch(e));
  });

  return (
    <div className="view-page">
      <h1>All Menu Items</h1>
      <Input
        value={searchTerms}
        type='Search'
        placeholder='Search'
        onChange={e => setSearchTerms(e.target.value)}
      />

      {
        filteredItems.map(
          item => {
            return (

              <ItemCard item={item} />
            );

          })
      }
    </div>
  );
};

export default View;
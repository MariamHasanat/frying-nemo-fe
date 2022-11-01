
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from '../../components/common/input/input.component';
import ItemCard from '../../components/item-card/item-card.component';
import FilterBar from '../../components/view/filter-input.component';
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

  const [menuItems, setMenuItems] = useState(initialItems);
  const [params, setParams] = useSearchParams();

  const searchParam = params.get('search') || '';
  console.log("search param: " + searchParam);

  console.log(menuItems);

  useEffect(() => {
    setMenuItems(getMenuItems());
  }, []);

  /**
   * @param {String} str
   */
  const doesItMatch = str => str.toLowerCase().includes(searchParam.toLowerCase().trim());
  const filteredItems = menuItems.filter(e => {
    return doesItMatch(e.name) ||
      doesItMatch(e.description) || e.ingredients.some(e => doesItMatch(e));
  });



  return (
    <div className="view-page">
      <h1>All Menu Items</h1>

      <FilterBar searchParam={searchParam} setParams={setParams} params={params} />

      <div className='items-container'>

        {
          filteredItems.map(
            item => {
              return (

                <ItemCard item={item} />
              );

            })
        }
      </div>
    </div>
  );
};

export default View;
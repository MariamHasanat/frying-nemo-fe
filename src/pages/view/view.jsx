
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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

  const [menuItems, setMenuItems] = useState(initialItems);
  const [searchTerms, setSearchTerms] = useState(localStorage.getItem('search-terms') || '');
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

  const setSearchTermsAndSave = (value) => {
    setSearchTerms(value);
    localStorage.setItem('search-terms', value);
  };

  return (
    <div className="view-page">
      <h1>All Menu Items</h1>
      <Input
        value={searchParam}
        type='Search'
        placeholder={'search'}
        onChange={e => {

          const newParam = new URLSearchParams(params);
          newParam.set('search', e.target.value.trim());

          setParams(newParam);
        }}
      />

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
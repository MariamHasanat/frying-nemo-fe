import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Select from '../../components/common/select/select.component';
import { CATEGORIES } from '../../data/constant';
import Item from '../../components/item/item.component';
import './veiw.css';
import FilterBar from './filter-bar/filter-bar.component';

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

const Addveiw = (props) => {
  const [menuItems, setMenuItems] = useState(initialItems);
  const [params, setParams] = useSearchParams();
  const searchTermsFromURL = params.get('searchTerms') || '';
  const categoryFromURL = params.get('category') || '';

  const getMenuItems = () => {
    setLoading(true);
 
    const doesItMatch = str => str.toLowerCase().includes(searchTermsFromURL.toLowerCase().trim());

  
    let match = (
      doesItMatch(item.name) ||
      doesItMatch(item.description) ||
      item.ingredients.some(ingredient => doesItMatch(ingredient))
    );

    if (categoryFromURL) {
      match = match && (item.category === categoryFromURL);
    }

    return match;
  });


  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
 
    <Select className='select-filter' name='category' label='select from menu' required>
          return {CATEGORIES.map((item) => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </Select>
       
      { <div className="items-container">
          {
            filteredItems
              .map((item, index) => <Item data={item} key={item.name + index} />)
          }
        </div>
      }
   
    </div>
  );
};

export default Addveiw;

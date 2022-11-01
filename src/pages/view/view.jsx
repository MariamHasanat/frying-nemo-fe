
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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

  const searchParamFromURl = params.get('search') || '';
  const categoryFromURl = params.get('category') || '';

  console.log("search param: " + searchParamFromURl);

  console.log(menuItems);

  useEffect(() => {
    setMenuItems(getMenuItems());
  }, []);


  const filteredItems = menuItems.filter(e => {

    /**
     * 
     * @param {String} str 
     * @returns 
     */
    const doesItMatch = str => str.toLowerCase().includes(searchParamFromURl.toLowerCase().trim());

    let match = (doesItMatch(e.name) ||
      doesItMatch(e.description) || e.ingredients.some(e => doesItMatch(e)));

    if (categoryFromURl) {
      match = match && e.category === categoryFromURl;
    }

    return match;

  });




  return (
    <div className="view-page">
      <h1>All Menu Items</h1>

      <FilterBar
        searchParamFromURl={searchParamFromURl}
        setParams={setParams}
        params={params}
        category={categoryFromURl}
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
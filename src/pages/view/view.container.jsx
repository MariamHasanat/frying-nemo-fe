import Item from './item/item.jsx';
import './viewContainerStyle.css';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Filter from './filter-bar/filter.bar.component.jsx';

const getMenuItem = () => JSON.parse(localStorage.menuItems || '[]');

const ViewPage = (props) => {
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

  const [menuItems] = useState(getMenuItem());
  const [params, setParams] = useSearchParams();
  const searchParams = params.get('q') || '';
  const categoriesFromURL = params.get('category') || '';

  const filteredItem = menuItems.filter(item => {

    let match = (
      item.name.toLowerCase().includes(searchParams.toLowerCase().trim()) ||

      item.description.toLowerCase().includes(searchParams.toLowerCase().trim()) ||

      item.ingredients.some(ingredients =>
        ingredients.toLowerCase().includes(searchParams.toLowerCase().trim())
      )
    );

    if(categoriesFromURL){
      match = match && (item.category === categoriesFromURL)
    }
    return match;
  }
  );

  return (
    <div className='view-container'>
      <h1 className='h1'>View Menu Items</h1>

      <Filter
        params={params}
        setParams={setParams}
        searchParams={searchParams} 
        categoriesFromURL={categoriesFromURL}
        />

      <div className='items-container'>
        {
          filteredItem
            .map((item, index) => <Item data={item} key={item.name + index} />)
        }
      </div>

    </div>
  );
};

export default ViewPage;
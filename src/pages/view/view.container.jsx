import Item from './item/item.jsx';
import './viewContainerStyle.css';
import { useState } from 'react';
import Input from '../../components/common/input.jsx';
import { useSearchParams } from 'react-router-dom';

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

  const filteredItem = menuItems.filter(item => {

    const match = (
      item.name.toLowerCase().includes(searchParams.toLowerCase().trim()) ||

      item.description.toLowerCase().includes(searchParams.toLowerCase().trim()) ||

      item.ingredients.some(ingredients =>
        ingredients.toLowerCase().includes(searchParams.toLowerCase().trim())
      )
    );
    return match;
  }
  );

  return (
    <div className='view-container'>
      <h1 className='h1'>View Menu Items</h1>
      <Input
        type="search"
        value={searchParams}
        onChange={e => {
          const newParam = new URLSearchParams(params);
          newParam.set('q', e.target.value);
          setParams(newParam);

        }}
        placeholder="Search"
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
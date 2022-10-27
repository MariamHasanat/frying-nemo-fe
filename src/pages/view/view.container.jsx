import Item from './item/item.jsx';
import './viewContainerStyle.css';
import { useState } from 'react';
import Input from '../../components/common/input.jsx';

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
  const [searchTerm, setSearchTerm] = useState('');


  const filteredItem = menuItems.filter(item => {

    
    
    return item.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
  }
  );

  return (
    <div className='view-container'>
      <h1 className='h1'>View Menu Items</h1>
      <Input
        type="search"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
        placeholder="Search"
      />

      <div className='items-container'>
        {
          filteredItem
            .map((item, index) => <Item data={item} key={item.name + index} />)
        }
      </div>;

    </div>
  );
};

export default ViewPage;
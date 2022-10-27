import Item from '../../../components/view/item/item/item.component';
import './view.css';
import { useState } from 'react';
import Input from '../../../components/common/input/input.component';

const getMenueItem = () => JSON.parse(localStorage.menuItems || '[]');
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

const ViewPage = () => {
  const [searchTerms,setSearchTerms] = useState('');
  /**
   * @type {[Array, Function]} Loading
   */
  const [menueItems] = useState(getMenueItem());
  console.log(menueItems);
  const Menue = menueItems.map((item, index) =>
    <Item
      data={item} key={item.name + index}
    />);

const filterItems = menueItems.filter(e =>{
  return e.name.toLowerCase().includs(searchTerms.toLocaleLowerCase().trim());
})
  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <Input
        type="search"
        value={searchTerms}
        onChange={e => setSearchTerms(e.target.value)}
        placeholder="Search"
      />
      <div>
        {
          Menue
        }
      </div>

    </div>
  );
};

export default ViewPage;

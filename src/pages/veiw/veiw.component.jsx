import './veiw.css';
import { useState } from 'react';
import Item from '../../components/item/item.component';
import Input from '../../components/common/input/input.component';
const getMenuitems = () =>JSON.parse(localStorage.menuItems || '[]');
const Addveiw = (props) => {
  /**
   *@type {[Array , Function]} Loading
   */ 
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
  const [menuItem, setMenuItem] = useState(initialItems);
  const [searchTerms, setSearchTerms] = useState('');

/***
 * @param {string} str
 */
const filterItem = menuItem.filter( item =>{
 const doesItMatch = str => str.toLowerCase().includes(searchTerms.toLowerCase().trim());
 const match  = () => {
  doesItMatch(item.name) ||
  doesItMatch(item.description) ||
  doesItMatch(item.ingredients.some(ingredient => doesItMatch(ingredient)))
 }
return match;
});

console.log(menuItem);
  return (
    <div>
      <h1>Add a new item</h1>
      <Input
      type = 'search'
      placeholder = "Search" 
      value = {searchTerms}
      onChange = {e => setSearchTerms(e.target.value)}/>
     <div className="npm ">
      {
  filterItem.map((item,index) => <Item data = {item} key ={item.name + index}/> )
      }
     </div>
    </div>
  );
};

export default Addveiw;
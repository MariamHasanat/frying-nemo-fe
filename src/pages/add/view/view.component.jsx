import Item from '../../../components/view/item/item/item.component';
import './view.css';
import { useState } from 'react';
import Input from '../../../components/common/input/input.component';
import { useEffect } from 'react';
import Spinner from '../../../components/core/header/spinner/spinner.component';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../../../components/view/item/item/filter-bar/filter-bar.component';



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
 // const [searchTerms,setSearchTerms] = useState('');
  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const searchTermsFromURL = params.get('searchTerms') || '';


  const getMenueItem = () => {
    setLoading(true);

    setTimeout( () =>{
      const items = JSON.parse(localStorage.menuItems || '[]');
      setMenuItems(items);
      setLoading(false);
    }, 1000);

  };

  useEffect(() =>{
    getMenueItem();
  }, []);

 /* const filteredItems = menueItems.filter(item => {

    const match =(
      item.name.toString().toLowerCase().includes(searchTerms.toLowerCase().trim()) 
    //  item.description.toLowerCase().includes(searchTerms.toLowerCase().trim()) ||
    //  item.ingredients.toLowerCase().includes(searchTerms.toLowerCase().trim()) 

    );
    return match;
  })*/

  const filteredItems = menuItems.filter(item => {
    /**
     * Check if search terms are somewhere inside given string.
     * @param {string} str 
     */
    const doesItMatch = str => str.toLowerCase().includes(searchTermsFromURL.toLowerCase().trim());

    const match = (
      doesItMatch(item.name) ||
      doesItMatch(item.description) ||
      item.ingredients.some(ingredient => doesItMatch(ingredient))
    );

    return match;
  });




 




  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
     <Input
       /* type="search"
        value={searchTerms}
        onChange={e => setSearchTerms(e.target.value)}
        placeholder="Search"*/
        
       /* type="search"
        value={searchTermsFromURL}
        onChange={e => {
          const newParams = new URLSearchParams(params);
          const inputValue = e.target.value;

          if (inputValue) {
            newParams.set('searchTerms', inputValue);
          } else {
            newParams.delete('searchTerms');
          }

          setParams(newParams);
        }}
        placeholder="Search"*/
      

      />

       {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {
            filteredItems.map((item, index) => <Item data={item} key={item.name + index} />)
          }
        </div>
      }


    </div>
  );
};

export default ViewPage;


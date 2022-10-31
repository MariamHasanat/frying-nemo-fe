import './viewpage.css';
import Card from './Card/Card';
import { useSearchParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import Spinner from '../spinner/spinner.component';
import Input from '../../common/input/input.component';

// const getMenuItems = () => JSON.parse(localStorage.getItem('menuItem') || '[]');
/**
 * @type {Array<{
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * }>}
 */
const initialItems = [];

const ViewPage = (props) => {
  const [menuItems , setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [params , setParams] = useSearchParams();

  const searchFromURL = params.get('search') || '';



  const getMenuItems = () => {
    setLoading(true);
    
    // Run the code inside after 1000 milliseconds (1 Second)
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem('menuItem') || '[]');
      console.log("items  ", localStorage.menuItem)
      setMenuItems(items);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  const filteredItems = menuItems.filter(item => {
    /**
     * Check if search terms are somewhere inside given string.
     * @param {string} str 
     */
     const doesItMatch = str => str.toLowerCase().includes(searchFromURL.toLowerCase().trim());
    
    console.log("item = " ,item);

    const match = (
      doesItMatch(item.name) ||
      doesItMatch(item.description) ||
      item.ingredients.some(ingredient => doesItMatch(ingredient))
    );

    return match;
  });



  return (
    <div className="View-page">
      <Input
      type="search"
      value={searchFromURL}
      onChange={e => {
        const newParams = new URLSearchParams(params);

        newParams.set('search' ,e.target.value)
        
        setParams(newParams);
      } }
      placeholder="Search"
      />
       {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        :<div className="items-container">
        {
          filteredItems.map((item, index) => <Card data={item} key={item.name + index}/>)
        }
     
      </div>
      }
    </div>
  );
};

export default ViewPage;
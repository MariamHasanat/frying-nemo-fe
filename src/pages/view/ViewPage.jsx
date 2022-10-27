import './viewpage.css';
import Card from './Card/Card';
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
 * image: string;
 * }>}
 */
const initialItems = [];

const ViewPage = (props) => {
  const [menuItems , setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  
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

  const filtierItem = menuItems.filter(items =>  {
    const match = (
      items.name.toLowerCase().includes(searchItem.toLowerCase().trim()) ||
      items.description.toLowerCase().includes(searchItem.toLowerCase().trim()) ||
      items.ingredients.some(ingredients => (searchItem.toLowerCase().trim()))
      
    )
  
      
  })

  return (
    <div className="View-page">
      <Input
      type="search"
      value={searchItem}
      onChange={e => setSearchItem(e.target.value)}
      placeholder="Search"
      />
       {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        :<div className="items-container">
        {
          filtierItem.map((item, index) => <Card data={item} key={item.name + index}/>)
        }
     
      </div>
      }
    </div>
  );
};

export default ViewPage;
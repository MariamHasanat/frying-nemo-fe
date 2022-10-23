import './viewpage.css';
import Card from './Card/Card';
import { useState , useEffect} from 'react';
import Spinner from '../spinner/spinner.component';

// const getMenuItems = () => JSON.parse(localStorage.getItem('menuItem') || '[]');

const ViewPage = (props) => {
  const [menuItems , setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const getMenuItems = () => {
    setLoading(true);
    
    // Run the code inside after 1000 milliseconds (1 Second)
    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItems || '[]');
      setMenuItems(items);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <div className="View-page">
       {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        :<div className="items-container">
        {
          menuItems.map((item, index) => <Card data={item} key={item.name + index}/>)
        }
       { console.log("fkjhdakj "+ loading)}
      </div>
      }
    </div>
  );
};

export default ViewPage;
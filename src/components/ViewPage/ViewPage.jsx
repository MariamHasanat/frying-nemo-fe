import { useEffect, useState } from 'react';
import Input from '../../common/input/input';
import Select from '../../common/Select/Select';
import Spinner from '../core/spinner/Spinner';
import Item from '../view/item/view.componets';
import './viewpage.css';


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
  const initialItems = [];
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerms, setSearchTerms] = useState("");

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
  const filteredMenu = menuItems.filter((item) => {
/**
 * @param {string} str
 */
    const DostItMatch=str=>str.toLowerCase().includes(searchTerms.toLowerCase().trim())

    const match=(
      DostItMatch(item.name)||
      DostItMatch(item.description)||
     item.ingredients.some(ing => DostItMatch(ing))
    );
   
return match;
      
    })

  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <Input type={"search"} value={searchTerms} placeholder="Search" onChange={(e) => {
        setSearchTerms(e.target.value);


      }}></Input>

      <br />
      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {
            filteredMenu.map((item, index) => <Item data={item} key={item.name + index} />)
          }
        </div>
      }
    </div>
  );
};

export default ViewPage;;

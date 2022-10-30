import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [searchTerms, setSearchTerms] = useState(localStorage.getItem("item-from-local") ||"");
const [Params,setParams]=useSearchParams();
const searchURL=Params.get('search')|| "";




 

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
    const DostItMatch = str => str.toLowerCase().includes(searchURL.toLowerCase().trim())

    const match = (
      DostItMatch(item.name) ||
      DostItMatch(item.description) ||
      item.ingredients.some(ing => DostItMatch(ing))||
      DostItMatch(item.price.toString())
    );

    return match;

  })
  const category = ["Fish", "Meat", "Hooka", "Salads", "Sandwich", "Appetizers", "Ice cream", "Drinks"]
  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
   <span className='beside'><Select>   {category.map(item => {
            return <option value={item} key={item}>{item}</option>;

          })}</Select>   <Input type={"search"} value={searchURL} placeholder="Search" onChange={(e) => {

const neWParams= new URLSearchParams(Params)
neWParams.set("search",e.target.value)
setParams(neWParams)
 


      }}></Input>
</span>   
   
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

import { useContext } from 'react';
import { useEffect, useState,useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Filter from '../core/filter-bar/Filter';
import Spinner from '../core/spinner/Spinner';
import Item from '../view/item/item.component';
import './viewpage.css';
import { UserContext } from '../../App';
import { CartContext } from '../../common/Provider/cart-provider-component';
import Test from '../../common/Provider/Provider-commponet';
import { getCartQuantity } from '../../data/getCartQuantity';
import { getItems } from '../../services/items';
import { useFilterItems } from '../../hooks/filter-item.hooks';
import { useParams } from '../../hooks/params.item';
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
  const [Params, setParams] = useSearchParams();
  const searchURL = Params.get('searchTerms') || "";
  const categoryParams = Params.getAll('category') || "";
  const ContextCart = useContext(CartContext);
  const {setParam}=useParams()

  const getMenuItems =  async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
const items=await getItems()

    setMenuItems(items);

  };


  useEffect(() => {
   
    getMenuItems();
  }, []);


 
  const filteredMenu =useFilterItems(menuItems)



  return (
    <div className="view-page">
      <Test><h1>View Menu Items</h1></Test>
      {
            filteredMenu.length
          }
      <Filter
      
       

      >
        
      </Filter>




  
      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
        
          { 
            filteredMenu.map((item, index) => <Item cartQuantity={getCartQuantity(item.id, ContextCart.cart)} data={item} key={item.name + index} />)
          }
        </div>
      }
    </div>
  );
};


export default ViewPage;
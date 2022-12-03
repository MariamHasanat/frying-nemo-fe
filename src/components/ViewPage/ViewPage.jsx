import { useContext } from 'react';
import { useEffect, useState } from 'react';
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
  const MINParams = Params.get('Min') || "";
  const MAXParams = Params.get('Max') || "";
  const ContextCart = useContext(CartContext);

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


  const filteredMenu = menuItems.filter((item) => {

    /**
     * @param {string} str
     */
    const DostItMatch = str => str.toLowerCase().includes(searchURL.toLowerCase().trim());


    var match = (
      DostItMatch(item.name) ||
      DostItMatch(item.description) ||
      item.ingredients.some(ing => DostItMatch(ing))


    );




    if (MINParams && MAXParams) {
      match = match && (item.price >= MINParams && item.price <= MAXParams);
    }
    if (categoryParams.length) {
      match = match && (categoryParams.includes(item.category));
    }


    return match;

  });
  const setParam = (name, value) => {
    const newParams = new URLSearchParams(Params);

    newParams.delete(name);

    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item));
    } else if (value.trim()) {
      newParams.set(name, value.trim());
    }

    setParams(newParams);
  };




  return (
    <div className="view-page">
      <Test><h1>View Menu Items</h1></Test>

      <Filter
        categoryParams={categoryParams}
        Params={Params}
        searchURL={searchURL}
        setParam={setParam}
        MAXParams={MAXParams}
        MINParams={MINParams}
        categories={categoryParams}

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
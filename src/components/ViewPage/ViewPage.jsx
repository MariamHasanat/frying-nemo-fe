import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Select from '../../common/Select/Select';
import Filter from '../core/filter-bar/Filter';
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
  const [Params, setParams] = useSearchParams();
  const searchURL = Params.get('searchTerms') || "";
  const categoryParams = Params.get('category') || "";
  const SingleCategoryParams = Params.get('Single-category') || "";
  const MINParams = Params.get('Min') || "";
  const MAXParams = Params.get('Max') || "";

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
    const DostItMatch = str => str.toLowerCase().includes(searchURL.toLowerCase().trim());


    var match = (
      DostItMatch(item.name) ||
      DostItMatch(item.description) ||
      item.ingredients.some(ing => DostItMatch(ing))


    );
    if (categoryParams) {
      match = match && (item.category === categoryParams);
    }


  
    if (MINParams && MAXParams) {
      match = match && (item.price >= MINParams && item.price <= MAXParams)
    }
    if (SingleCategoryParams.length) {
      match = match && (SingleCategoryParams.includes(item.category));
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
      <h1>View Menu Items</h1>

      <Filter
        categoryParams={categoryParams}
        Params={Params}
        searchURL={searchURL}
        setParam={setParam}
        MAXParams={MAXParams}
        MINParams={MINParams}
        SingleCategoryParams={SingleCategoryParams}


      >
      </Filter>



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


export default ViewPage;
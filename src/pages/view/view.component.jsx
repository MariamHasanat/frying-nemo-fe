import './view.css';
import { useEffect, useState } from 'react';
import Spinner from '../../components/core/spinner/spinner.componenr';
import MenuItem from '../../components/view/menu-item/menu-item.component';
import FilterBar from '../../components/view/filter-bar/filter-bar.component';
import { fetchItems } from '../../services/view/fetch-items.service';
import { useFilterItems } from '../../hooks/filter-items.hook';
import useToggle from '../../hooks/toggle.hook';

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
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(initialItems);
  //param is an instance of complex class (URLSearchParams) so I need to use get (name) to access specific param 
  const [isTourist , toggleIsTourist] = useToggle(false)

  const getMenuItems = async () => {
    setLoading(true);
    try {
      const tempItems = await fetchItems() ;
      setItems (tempItems);
      setLoading (false);
    }
    catch (error) {
      console.error (error) ;
    }
  };

  const filteredIetems = useFilterItems(items , isTourist) ;

  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <div className='view'>
      <h1 align='center'>View Menu Items</h1>
      <FilterBar isTourist = {isTourist} toggleIsTourist = {toggleIsTourist} />
      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner />
        </div>
        : <div className='items'>
          {
            filteredIetems.length
              ? filteredIetems.map((item, index) => <div key={item.name + index}>
                <MenuItem item={item} />
              </div>)
              : <div className="img">
                <h5>No such item satisfies your requirements!</h5>
                <img src="./sad-crab.svg" alt="" />
              </div>
          }
        </div>
      }
    </div>
  );
};

export default ViewPage;
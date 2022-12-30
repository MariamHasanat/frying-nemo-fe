import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Spinner from '../../components/core/spinner/spinner.componenr';
import MenuItem from '../../components/view/menu-item/menu-item.component';
import FilterBar from '../../components/view/filter-bar/filter-bar.component';
import './view.css';
import { fetchItems } from '../../services/view/fetch-items.service';
import { useFilterItems } from '../../hooks/filter-items.hook';

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
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(initialItems);
  //param is an instance of complex class (URLSearchParams) so I need to use get (name) to access specific param 
  const [param, setParam] = useSearchParams();

  const setParams = (addTo, value) => {
    let newParam = new URLSearchParams(param);
    newParam.delete(addTo);
    if (Array.isArray(value)) {
      value.forEach(cat => newParam.append(addTo, cat));
    }
    else if (value.trim())
      newParam.set(addTo, value);
    setParam(newParam);
  };

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

  const filteredIetems = useFilterItems(items) ;

  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <div className='view'>
      <h1 align='center'>View Menu Items</h1>
      <FilterBar
        searchUsingURL={param.get('searchTerms') || ''}
        categoryUsingURL={param.getAll('category') || ''}
        maxPrice={param.get('max') || ''}
        minPrice={param.get('min') || ''}
        param={param}
        setParam={setParam}
        setParams={setParams}
      />
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
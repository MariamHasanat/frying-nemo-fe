import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Spinner from '../../components/core/spinner/spinner.componenr';
import MenuItem from '../../components/view/menu-item/menu-item.component';
import FilterBar from '../../components/view/filter-bar/filter-bar.component';
import './view.css';
import { fetchItems } from '../../services/get-item';

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
  const searchUsingURL = param.get('searchTerms') || '';
  const categoryUsingURL = param.getAll('category') || '';
  const minPrice = param.get('min') || '';
  const maxPrice = param.get('max') || '';
  // const userContext = useContext(UserContext);

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

  useEffect(() => {
    getMenuItems();
    return (() => console.log('Im out'));
  }, []);

  const filteredIetems = items.filter(element => {
    const doesItMatch = (value) => value.toLowerCase().includes(searchUsingURL.toLowerCase().trim());
    let match = (
      doesItMatch(element.name)
      || doesItMatch(element.description)
      || element.ingredients.some(ingredient => doesItMatch(ingredient))
      // => i can use find function instead , but (some is better to use) 
    );
    if (categoryUsingURL) {
      // match = match && element.category == categoryUsingURL ;   => for a single category filter :) 
      match = match && categoryUsingURL.includes(element.category);  // for a multiple category filter :)
    }
    if (minPrice)
      match = match && element.price >= minPrice;
    if (maxPrice)
      match = match && element.price <= maxPrice;
    return match;
  });

  return (
    <div className='view'>
      <h1 align='center'>View Menu Items</h1>
      <FilterBar
        searchUsingURL={searchUsingURL}
        categoryUsingURL={categoryUsingURL}
        maxPrice={maxPrice}
        minPrice={minPrice}
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
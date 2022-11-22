import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FilterBar from '../../components/view/filter-bar/filter-bar.component';
import Item from '../../components/view/item/item.component';
import './view.css';
import { useContext } from 'react';
import { UserContext } from '../../components/providers/user-provider.component';

/**
 * @type {Array<{
 * id: number;
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
  const props = useContext(UserContext);
  const [menuItems, setMenuItems] = useState(initialItems);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const searchTermsFromURL = params.get('searchTerms') || '';
  const categoriesFromURL = params.getAll('category') || '';

  const getMenuItems = () => {
    const items = JSON.parse(localStorage.menuItems || '[]');
    setMenuItems(items);
  };

  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (!props.user?.id) {
      navigate('/login', { replace: false });
    }
  }, []);

  useEffect(() => {
    getMenuItems();
  }, []);

  const filteredItems = menuItems.filter(item => {
    /**
     * Check if search terms are somewhere inside given string.
     * @param {string} str 
     */
    const doesItMatch = str => str.toLowerCase().includes(searchTermsFromURL.toLowerCase().trim());

    let match = (
      doesItMatch(item.name) ||
      doesItMatch(item.description) ||
      item.ingredients.some(ingredient => doesItMatch(ingredient))
    );

    if (categoriesFromURL.length) {
      match = match && (categoriesFromURL.includes(item.category));
    }

    return match;
  });

  /**
   * Set query string parameter.
   * @param {string} name Parameter name.
   * @param {string | string[]} value Parameter value.
   */
  const setParam = (name, value) => {
    const newParams = new URLSearchParams(params);

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
      <h1>View Items</h1>
      <FilterBar
        searchTerms={searchTermsFromURL}
        categories={categoriesFromURL}
        setParam={setParam}
      />


      <div className="items-container">
        {
          filteredItems.length
            ? filteredItems.map((item, index) => <Item data={item} key={item.name + index} />)
            : (
              <div className="no-results">
                {
                   searchTermsFromURL === "" ? <p>No items are currently available</p>   : 
                    <p>Sorry we couldn't find any matches for  <span className='error-search-term'> {searchTermsFromURL}  </span> </p>
                }
                
              </div>
            )
        }
      </div>
      )

    </div>
  );
};

export default ViewPage;;
import Item from './item/item.jsx';
import './viewContainerStyle.css';
import Spinner from '../../components/spinner/spinner.jsx';
import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import Filter from './filter-bar/filter.bar.component.jsx';
//import { UserContext } from '../../components/providers/user-provider';
import { CartContext } from '../../components/providers/cart-provider';

//import UserContext from '../../App';

const initialItems = [];

const ViewPage = (props) => {
  /**
   * @type {Array<{
   * id: number;
   * name: string;
   * description: string;
   * ingredients: string[];
   * price: number;
   * category: string;
   * image: string;
   * },
   * dispatch: React.DispatchWithoutAction
   * >}
   */

  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const searchParams = params.get('q') || '';
  const categoriesFromURL = params.get('category') || '';
   const cartContext = useContext(CartContext);

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

  const filteredItem = menuItems.filter(item => {

    let match = (
      item.name.toLowerCase().includes(searchParams.toLowerCase().trim()) ||

      item.description.toLowerCase().includes(searchParams.toLowerCase().trim()) ||

      item.ingredients.some(ingredients =>
        ingredients.toLowerCase().includes(searchParams.toLowerCase().trim())
      )
    );

    if (categoriesFromURL) {
      match = match && (item.category === categoriesFromURL);
    }
    return match;
  }
  );

  return (
    <div className='view-container'>
      <h1 className='h1'>View Menu Items</h1>

      <Filter
        params={params}
        setParams={setParams}
        searchParams={searchParams}
        categoriesFromURL={categoriesFromURL}
      />

      {
        loading
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
          : (
            <div className="items-container">
              {
                filteredItem.length
                  ? filteredItem.map((item, index) =>
                    <Item
                      data={item}
                      key={item.name + index}
                      dispatch={cartContext.dispatch}
                    />)
                  : (
                    <div className="no-results">
                      <img src="./frustrated-realistic.png" alt="No results" />
                      <p>No results found</p>
                    </div>
                  )
              }
            </div>
          )
      }

    </div>
  );
};

export default ViewPage;

import Spinner from '../spinner/spinner.component';
import FilterBar from './filter-bar/FilterBar';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import Card from './Card/Card';
import './viewpage.css';
import { getMenu } from '../../services/items';
import { CartContext } from '../../components/add/form/provider/CartProvider.jsx';
import useFilteredItem from '../../Hooks/filterItems.hook';


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

  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const cartContext = useContext(CartContext);


  const getCartQuntity = (id) => {
    const currentItem = cartContext.cart.find(element => (id === element.meal.id));
    if (currentItem) {
      return currentItem.quantity;
    } else {
      return 0;
    }
  };

  const getMenuItems = async () => {
    setLoading(true);
    const items = await getMenu();
    setMenuItems(items);
    console.log(items);
    setLoading(false);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  const filteredItems = useFilteredItem(menuItems);
  
  


  return (
    <div className="View-page">
      <FilterBar
      
      />

      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          {
            filteredItems.map((item, index) => <Card
              data={item}
              key={item.name + index}
              dispatch={cartContext.dispatch}
              getCartQuntity={getCartQuntity(item.id)}
            />)
          }

        </div>
      }
    </div>
  );
};

export default ViewPage;

import Spinner from '../spinner/spinner.component';
import FilterBar from './filter-bar/FilterBar';
import { useContext } from 'react';
import Card from './Card/Card';
import './viewpage.css';
import { CartContext } from '../../components/add/form/provider/CartProvider.jsx';
import useGetItems from '../../Hooks/menu/get-items.hooks';


const ViewPage = () => {
  const { menuItems, loading } = useGetItems();
  console.log("menuItems" , menuItems);
  const cartContext = useContext(CartContext);
  const getCartQuntity = (id) => {
    const currentItem = cartContext.cart.find(element => (id === element.meal.id));
    if (currentItem) {
      return currentItem.quantity;
    } else {
      return 0;
    }
  };

  return (
    <div className="View-page">

      <FilterBar />
      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">
          { menuItems?.length ?
            menuItems.map((item, index) => <Card
              data={item}
              key={item.name + index}
              dispatch={cartContext.dispatch}
              getCartQuntity={getCartQuntity(item.id)}
            />) : <h1>No result found</h1>
          }

        </div>
      }
    </div>
  );
};

export default ViewPage;
import { useState, useEffect } from 'react';
import './viewitem.css'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchItem } from '../../../services/items';
import Card from '../Card/Card';
import Spinner from '../../spinner/spinner.component';
import { useContext } from 'react';
import { CartContext } from '../../../components/add/form/provider/CartProvider';

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

const ViewItemPage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const cartContext = useContext(CartContext);

  const getCartQuntity = (id) => {
    const currentItem = cartContext.cart.find(element => (id === element.meal.id))
    if(currentItem) {
      return currentItem.quantity;
    } else {
      return 0;
    }
  }
  const getItems = async() => {
    const item = await fetchItem(params.id);
     
    if(item === null) {
      navigate('/404');
    }
      setCurrentItem(item);
      setLoading(false);
  }

  useEffect(() => {
    getItems();
  }, [params.id]);


  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {loading && <Spinner />}
      {
        !loading && currentItem !== null
          ? <Card data={currentItem} dispatch={cartContext.dispatch} getCartQuntity={getCartQuntity(currentItem.id)}/>
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;
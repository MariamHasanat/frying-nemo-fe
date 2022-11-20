import { useState, useEffect } from 'react';
import './viewitem.css'
import { useNavigate, useParams } from 'react-router-dom';
import { getItem } from '../../../item';
import Card from '../Card/Card';
import Spinner from '../../spinner/spinner.component';

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

  const getCartQuntity = (id) => {
    const currentItem = props.cart.find(element => (id === element.meal.id))
    if(currentItem) {
      return currentItem.quantity;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    setLoading(true);
    const item = getItem(params.id);
    console.log("id",params.id);
    if(item === null) {
      navigate('/404');
    }
      setCurrentItem(item);
      setLoading(false);
  }, [params.id]);


  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {loading && <Spinner />}
      {
        !loading && currentItem !== null
          ? <Card data={currentItem} dispatch={props.dispatch} getCartQuntity={getCartQuntity(currentItem.id)}/>
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;
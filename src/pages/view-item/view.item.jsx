import { useState, useEffect, navigate, useContext } from 'react';
import './viewItemStyle.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getItem } from '../../services/items';
import Item from '../view/item/item';
import Spinner from '../../components/spinner/spinner';
import { CartContext } from '../../components/providers/cart-provider';
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
  navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const cartContext = useContext(CartContext);

  const getOneItem = async () => {
    setLoading(true);
    const item = await getItem(params.id);
    console.log(item);

    if (item === null) {
      navigate("/404");
    }
    setCurrentItem(item);
    setLoading(false);
  };
  useEffect(() => {
    const oneItem = getOneItem;
    setCurrentItem(oneItem);
  }, [params.id]);


  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {loading && <Spinner />}
      {
        !loading && currentItem !== null
          ? <Item data={currentItem} dispatch={cartContext.dispatch} />
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;
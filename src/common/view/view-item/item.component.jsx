import { useState, useEffect } from 'react';
import './item.css';
import { useNavigate, useParams } from 'react-router-dom';
import Items from '../item/item.component';
import {getItem }from '../../../data/items';
import "../../header/header.css";
import { getCartQuantity } from '../../../utilit/cart';


/**
 * @type {Array<{
 * id:number;
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

  useEffect(() => {
    setLoading(true);
   const item =getItem(params.id);
   if (item === null) {
    navigate('/404')
   }
      setCurrentItem(item);
      setLoading(false);
  }, [params.id]);


  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {loading }
      {
        !loading && currentItem !== null
          ? <Items data={currentItem} dispatch={props.dispatch} CartQuantity={getCartQuantity(currentItem.id,props.cart)} />
          : null
      }
    </div>
  );
};

export default ViewItemPage;

import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/core/spinner/spinner.componenr';
import { CartContext } from '../../components/providers/cart-provider.component';
import PriceBar from '../../components/view/price-bar/price-bar.component';
import { getCartQuantity } from '../../util/cart';
import './single-item.css';

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

const SingleItem = (props) => {
  const cartContext = useContext (CartContext) ;
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const item = getItem(params.id);
    if (item === null) {
      navigate("/404", { replace: true });
    }
    setCurrentItem(item);
    setLoading(false);
  }, []);


  const getItem = (id) => {
    const items = JSON.parse(localStorage.menuItems || '[]');
    const item = items.filter(it => it.id.toString() === id);
    return item[0] || null;
  };

  return (
    <div className='singleItem'>
      {loading
        ? <Spinner />
        : <div className="item-details">
          <h1>{currentItem.name}</h1>
          <div className="img">
            <img src={currentItem.image} alt="food" />
          </div>
          <div className="info">
            <p><b>Item Description: </b> {currentItem.description}</p>
            <p className="ingredients"><b>Ingredients:</b>
              <br />{currentItem.ingredients.join(", ")}</p>
          </div>
          <PriceBar item={currentItem} dispatch = {cartContext.dispatch} cartQuantity = {getCartQuantity(currentItem.id , cartContext.cart)}/>
        </div>
      }
    </div>
  );
};

export default SingleItem;
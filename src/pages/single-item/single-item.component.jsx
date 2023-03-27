import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/core/spinner/spinner.componenr';
import { CartContext } from '../../components/providers/cart-provider.component';
import PriceBar from '../../components/view/price-bar/price-bar.component';
import { deleteItem, fetchItem } from '../../services/view/fetch-items.service';
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
 * imageUrl: string;
 * }>}
 */

const SingleItem = () => {
  const cartContext = useContext(CartContext);
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchItem(params.id)
      .then(item => {
        if (item === null) {
          navigate("/404", { replace: true });
        }
        setCurrentItem(item);
      });
    setLoading(false);
  }, []);

  const handleDeleteItem = () => {
    if (deleteItem(params.id)) {
      alert('Item deleted .');
      navigate('/view');
    }
    else {
      alert('something went wrong , item not deleted !');
    }
  };

  const handleUpdateItem = () => {
    navigate(`/update/${params.id}`)
  }


  return (
    <div className='singleItem'>
      {(loading || (currentItem === null))
        ? <Spinner />
        : <div className="item-details">
          <div className="action-buttons">
            <button className='nemo-button'
              onClick={handleUpdateItem}
            >
              Edit
            </button>
            <button className='nemo-button'
              onClick={handleDeleteItem}
            >
              Delete
            </button>
          </div>
          <h1>{currentItem.name}</h1>
          <div className="img">
            <img src={currentItem.imageUrl} alt="food" />
          </div>
          <div className="info">
            <p><b>Item Description: </b> {currentItem.description}</p>
            <p className="ingredients"><b>Ingredients:</b>
              <br />{currentItem.ingredients.join(", ")}</p>
          </div>
          <PriceBar item={currentItem} dispatch={cartContext.dispatch} cartQuantity={getCartQuantity(currentItem._id, cartContext.cart)} />
        </div>
      }
    </div>
  );
};

export default SingleItem;
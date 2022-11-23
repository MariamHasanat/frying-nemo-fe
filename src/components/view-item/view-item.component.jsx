import { useState, useEffect } from 'react';
import './view-item.css';
import {useNavigate, useParams } from 'react-router-dom';
import { getItem } from './item';
import Item from '../menu-item/menu-item.component';
import Spinner from '../spinner/spinner.component';
import { getCartQuantity } from '../header/cart';
import PriceBar from '../price-bar/price-bar.component';

const ViewItemPage = (props) =>{
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setLoading(true);
    const item = getItem(params.id);
    if (item === null) {
      navigate("/404", { replace: true });
    }
    setCurrentItem(item);
    setLoading(false);
  },[]);

  return(
    <div className="view-item-page">
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
          <PriceBar
            item={currentItem}
            dispatch={props.dispatch}
            cartQuantity={getCartQuantity(currentItem.id, props.cart)}
          />
        </div>
      }
    </div>
  );
};

export default ViewItemPage;
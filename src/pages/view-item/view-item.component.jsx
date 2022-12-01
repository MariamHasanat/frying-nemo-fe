import { useState, useEffect } from 'react';
import './view-item.css';
import {useNavigate, useParams } from 'react-router-dom';
import { getItem, getItems, getSingleItem } from './item';
import Item from '../../components/menu-item/menu-item.component';
import Spinner from '../../components/spinner/spinner.component';
import { getCartQuantity } from '../../components/header/cart';
import PriceBar from '../../components/price-bar/price-bar.component';
import { useContext } from 'react';
import { CartContext } from '../../components/providers/cart-provider.component';

const ViewItemPage = (props) =>{
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const cartContext = useContext(CartContext);

  const itemGetting = async ()=>{
    setLoading(true);
    const item = await getSingleItem(params.id);
    if (item != null) {
      setCurrentItem(item);
      setLoading(false);
    }
  else{navigate("/404", { replace: true });
  }};

  useEffect(() =>{
    itemGetting();
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
            dispatch={cartContext.dispatch}
            cartQuantity={getCartQuantity(currentItem.id, cartContext.cart)}
          />
        </div>
      }
    </div>
  );
};

export default ViewItemPage;
import { React, useState, useEffect } from 'react';
import './view-item.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getItem, getItems } from '../../services/item';
import Spinner from '../../components/core/spinner.component';
import PriceBar from '../../components/price-bar/price-bar.component';
import { getCartQuantity } from '../../utils/cart';
import { useContext } from 'react';
import { CartContext } from '../../components/providers/cart-provider.component';

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

const ViewItemPage = (props) => {
  const params = useParams();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getItem(params.id)
    .then( (item)=>{  
     
      setCurrentItem(item);
      if (item === null) {
        navigate("/404", { replace: true });
      }  
       setLoading(false);
    }

    );


  }, []);
  //ممكن تنشال
  return (
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
              <br />{currentItem.ingredients.join(" , ")}</p>
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

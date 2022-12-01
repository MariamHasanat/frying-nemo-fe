import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getItem } from '../../services/items';
import { useNavigate } from 'react-router-dom';
import './veiw-item.css';
import PriceBar from '../veiw/price-bar/price-bar.component';
import { useContext } from 'react';
import { CartContext } from '../../components/providers/cart.provider.component';
import { getCartQuantity } from '../../utils/cart';

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
 
const AddveiwItem = (props) => {
 const params = useParams();
 const [currentItem,setCurrentItem] = useState(null);
const navigate =useNavigate();
const cartContext = useContext(CartContext);
  useEffect(() => {
  getItem(params.id).then((item)=>{
    setCurrentItem(item);
    if(item === null)
    navigate("/404");
  });
 }, []
);
 return (
  <div className="view-item-page">
    {currentItem? <div className="item-details">
          <h1>{currentItem.name}</h1>
          <div className="img">
            <img src={currentItem.image} alt="food" />
          </div>
          <div className="info">
            <p><b>Item Description: </b> {currentItem.description}</p>
            <p className="ingredients"><b>Ingredients:</b>
              <br />{currentItem.ingredients.join(", ")}</p>
          </div>
          <PriceBar item={currentItem} 
          dispatch={cartContext.dispatch} 
          cartQuantity={getCartQuantity(currentItem.id, cartContext.cart)}/>
        </div> : null}

  </div>
);

};

export default AddveiwItem;

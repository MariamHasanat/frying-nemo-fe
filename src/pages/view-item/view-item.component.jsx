import getItem from "../../services/item";
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from "../../components/core/header/spinner/spinner.component";
import PriceBar from "../../components/view/item/item/price-bar/price-bar.cpmponent";
import { useContext } from "react";
import { CartContext } from "../../components/provider/cart.provider";


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

const ViewItemPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const cartContext = useContext(CartContext)
  useEffect(() => {
    setLoading(true);
    const item = getItem(params.id);
    setCurrentItem(item);
    setLoading(false);
  }, []);


  return (
    <div className="view-item-page">
      {loading ?<Spinner />
      
        :loading && currentItem !== null
          ? <div className="item-details">
            <h1>{currentItem.name}</h1>
            <div className="img">
              <img src={currentItem.image} alt="food" />
            </div>
            <div className="info">
              <p><b>Item Description: </b> {currentItem.description}</p>
              <p className="ingredients"><b>Ingredients:</b>
              <br/>{currentItem.ingredients.join(", ")}</p>
            </div>
            <PriceBar item={currentItem} />
          </div>
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;


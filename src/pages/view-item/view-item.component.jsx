import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './view-item.css';
import { getItem } from '../../services/items';
import Spinner from '../../components/core/spinner/spinner.component';
import PriceBar from '../../components/common/PriceBar/PriceBar';
import { getCartQuantity } from '../../data/getCartQuantity';
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
              <br />{currentItem.ingredients.join(", ")}</p>
          </div>
          <PriceBar data={currentItem}   cartQuantity={getCartQuantity(currentItem.id,props.cart)} dispatch={props.dispatch} />
        </div>
      }
    </div>
  );
};

export default ViewItemPage;
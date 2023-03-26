import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './view-item.css';
import { fetchItem } from '../../services/items';
import Spinner from '../../components/spinner/spinner.component';
import PriceBar from '../../components/view/price-bar/price-bar.component';
import { getCartQuantity } from '../../utils/cart';
import { useContext } from 'react';
import { CartContext } from '../../components/providers/cart-provider.component';



const ViewItemPage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState({});
  const [loading, setLoading] = useState(true);
  const cartContext = useContext(CartContext);



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



  return (
    <div className="view-item-page">
      {loading
        ? <Spinner />
        : <div className="item-details">
          <h1>{currentItem.name}</h1>
          <div className="img">
            <img src={currentItem.imageUrl} alt="food" />
          </div>
          <div className="info">
            <p><b>Item Description: </b> {currentItem.description}</p>
            <p className="ingredients"><b>Ingredients:</b>
              <br />{currentItem.ingredients?.join(", ")}</p>
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

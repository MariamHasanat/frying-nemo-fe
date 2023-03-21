import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Spinner from "../../components/core/header/spinner/spinner.component";
import PriceBar from "../../components/view/item/item/price-bar/price-bar.cpmponent";
import { CartContext } from "../../components/provider/cart.provider";
import { fetchItem } from '../../services/item';
import { getCartQuantity } from '../../utils/cart';

/*const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoPlay: true
};*/

const ViewItemPage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    fetchItem(params.id)
      .then(item => {
        if (item === null) {
          navigate("/404", { replace: true });
        } else {
          setCurrentItem(item);
        }
      });
    setLoading(false);
  }, []);

  return (
    <div className="view-item-page">
      {loading || currentItem == null
        ? <Spinner />
        : <div className="item-details">
          <h1>{currentItem.name}</h1>
          <div className="img">
          
              <div>
                <img src={currentItem.image} alt="food" />
              </div>
              <div>
                <img src={currentItem.image} alt="food" />
              </div>
              <div>
                <img src={currentItem.image} alt="food" />
              </div>
              <div>
                <img src={currentItem.image} alt="food" />
              </div>
         
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

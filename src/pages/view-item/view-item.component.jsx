import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './view-item.css';
import { fetchItem, deleteItem } from '../../services/items';
import Spinner from '../../components/spinner/spinner.component';
import PriceBar from '../../components/view/price-bar/price-bar.component';
import { getCartQuantity } from '../../utils/cart';
import { useContext } from 'react';
import { CartContext } from '../../components/providers/cart-provider.component';
import { Trash } from 'phosphor-react';


const ViewItemPage = () => {
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


  const DeleteItem = () => {
    if (deleteItem(params.id)) {
      alert('Item deleted successfully !');
      navigate('/view');
    }
    else {
      alert('Something went wrong, the item is not deleted !');
    }
  };

  return (
    <div className="view-item-page">
      {loading
        ? <Spinner />
        : <div className="item-details">

          <button className='.delete-button' onClick={DeleteItem} >
            <Trash size={32} color="#000" />
          </button>

          <h1>{currentItem.name}</h1>
          <div className="img">
            <img src={currentItem.imageUrl} alt="food" />
          </div>
          <div className="info">
            {currentItem.addedBy && <small><label>Added By: </label>{currentItem.addedBy.fullName}</small>}
            <br /><br />
            <p><b>Item Description: </b> {currentItem.description}</p>
            <p className="ingredients"><b>Ingredients:</b>
              <br />{currentItem.ingredients?.join(", ")}</p>
          </div>
          <PriceBar
            item={currentItem}
            dispatch={cartContext.dispatch}
            cartQuantity={getCartQuantity(currentItem._id, cartContext.cart)}
          />

        </div>
      }
    </div>
  );
};


export default ViewItemPage;

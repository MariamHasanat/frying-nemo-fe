import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './view-item.css';
import { getSingleItem } from '../../services/items';
import Spinner from '../../components/core/spinner/spinner.component';
import PriceBar from '../../components/common/PriceBar/PriceBar';
import { getCartQuantity } from '../../data/getCartQuantity';
import { CartContext } from '../../common/Provider/cart-provider-component';
import { useContext } from 'react';
import UseGetItem from '../../hooks/menu/get-items';
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
const nav=useNavigate()
  const [currentItem, setCurrentItem] = useState({});
  const [loading, setLoading] = useState(true);



  const ContextCart = useContext(CartContext);
  useEffect(() => {
    singleItem();
  }, []);

  const singleItem =() => {
    setLoading(true);
    getSingleItem(params.id)
    .then(item => {
      console.log(item)
      setCurrentItem(item);
       if (item === null)
  nav("/404",{return:false})
    });
    setLoading(false);
  };


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
          </div>
          <div className="info">
            <p><b>Item ingredients:</b> {currentItem.ingredients}</p>
          </div>
          
          <PriceBar data={currentItem} cartQuantity={getCartQuantity(currentItem.id, ContextCart.cart)} />
        </div>
      }
    </div>
  );
};

export default ViewItemPage;
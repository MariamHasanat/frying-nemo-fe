import { useState, useEffect, useContext } from 'react';
// import './viewitem.css';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../components/providers/cart-provider';
import { getItem } from '../../components/services/items';
import { getItemQuantity } from '../../components/common/utilities/get-item-quantity';
import Card from '../view/card';
import './viewItems.css'
// /**
//  * @type {Array<{
//  * id :number
//  * name: string;
//  * description: string;
//  * ingredients: string[];
//  * price: number;
//  * category: string;
//  * image: string;
//  * }>}
//  */

const ViewItemPage = (props) => {
  const params = useParams();
  const [currentItem, setCurrentItem] = useState(null);
  const cartContext = useContext(CartContext);

  const navigate = useNavigate();



  useEffect(() => {
    // const item = getItem(params.id);
    // if (item === null)
    //   navigate('/404', { replace: true });
    // else {
    //   setCurrentItem(item);
    // }

    getItem(params.id)
      .then(item => {
        if (item === null) {
          navigate("/404", { replace: true });
        } else {
          setCurrentItem(item);
        }
      });




  }, []);


  return (
    <div className="view-item-page">
      <h1> Menu Item</h1>
      {
        currentItem !== null
          ? <Card data={currentItem}
          // cartQuantity={getItemQuantity(currentItem.id, cartContext.cart)}
          dispatch={cartContext.dispatch}
          cartQuantity={getItemQuantity( cartContext.cart,currentItem.id)}


          />
          : <span>Item Not Found!</span>
      }
    </div>
  );
};

export default ViewItemPage;

import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../components/add/form/provider/CartProvider';
import RowList from '../List-row/RowList';

const ListCartpage = (props) => {

  const cartContext = useContext(CartContext);

  const handelClear = () => {
    cartContext.dispatch({ type: 'Clear', meal : cartContext.cart.meal});
  };
  
  let totalPrice = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
   totalPrice += (cartContext.cart[i].quantity * cartContext.cart[i].meal.price);
  }

  return (
    cartContext.cart.length ?
      <><ul>
        {cartContext.cart.map((cartItem, index) =>
          <RowList cartItem={cartItem} dispatch={cartContext.dispatch} key={index} />
        )
        }
      </ul>
        <button onClick={handelClear} className="nemo-button">Clear</button>
        <h3>The Total price : ${totalPrice}</h3>
      </>
      :
      <p>there is no thing here</p>

  );
};

export default ListCartpage


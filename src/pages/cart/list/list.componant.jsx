import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../components/provider/cartprovider';
import CartRow from '../row/row.componant';

const CartList = (props) => {
  const cartContext = useContext(CartContext);
  return (
    cartContext.cart.length
      ? <ul className="cart-list">
        {
          cartContext.cart.map((cartItem, index) => <CartRow cartItem={cartItem} dispatch={cartContext.dispatch} key={"r_" + index} />)
        }
      </ul>
      : <div className="no-results">
        <img src="./angry.png" alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;

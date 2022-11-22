import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider';
import CartRow from '../row/row';

const CartList = (props) => {
  const cartContext = useContext(CartContext);
  return (
    cartContext.cart.length
      ? <ul className="cart-list">
        {
          cartContext.cart.map((item, index) => <CartRow item={item} dispatch={cartContext.dispatch} key={"r_" + index} />)
       
       }
      </ul>
      : <div className="no-results">
        <img src="./empty_cart.webp" alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;
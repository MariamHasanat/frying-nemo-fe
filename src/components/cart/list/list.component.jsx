import React from 'react';
import CartRow from '../row/row.component';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider.component';


const CartList = (props) => {
  const cartContext =useContext(CartContext);
  return (
    props.cart.length
      ? <ul className="cart-list">
        {
          props.cart.map((cartItem, index) => <CartRow cartItem={cartItem} key={"r_" + index} />)
        }
      </ul>
      : <div className="no-results">
        <img src="./empty_cart.webp" alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;

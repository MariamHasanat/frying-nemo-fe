import React from 'react';
import CartRow from './row/row.component';

const CartList = (props) => {
  return (
    props.cart.length
      ? <ul className="cart-list">
        {
          props.cart.map((cartItem, index) => <CartRow cartItem={cartItem} key={"r_" + index} />)
        }
      </ul>
      : <div className="no-results">
        <img src="https://cdn-icons-png.flaticon.com/512/1978/1978026.png" alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;
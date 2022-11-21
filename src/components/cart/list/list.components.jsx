import React from 'react';
import CartRow from '../../cart/row/row.component';
import "./list.css";

const CartList = (props) => {
  return (
    props.cart.length
      ? <ul className="cart-list">
        {
          props.cart.map((cartItem, index) => <CartRow cartItem={cartItem} key={"r_" + index} />)
        }
      </ul>
      : <div className="no-results">
        <img src="https://i0.wp.com/darwishzahwan.com/wp-content/uploads/2015/05/uciBhP05-300x3001.jpeg?fit=300%2C300&ssl=1سسس" alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;

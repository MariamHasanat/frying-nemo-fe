import React from 'react';
import CartRow from '../row/row.component';
import "./list.css";

const CartList = (props) => {

  return (
    props.cart.length
      ? <ul className="cart-list">
        {
          props.cart.map((item, index) => <CartRow item={item} dispatch={props.dispatch} key={"r_" + index} />)
        }
      </ul>
      : <div className="no-results">
        <div className="cart-empty-image"></div>
        <p className="cart-empty-text">Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;
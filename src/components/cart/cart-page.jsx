import React from 'react';
import './cart.css';
import CartList from '../cart/list/list.components';

const CartPage = (props) => {
  return (
    <div className="cart-page">
      
      <CartList cart={props.cart} dispatch={props.dispatch} />
    </div>
  );
};

export default CartPage;

import React from 'react';
import CartList from '../list/list.componant';
import './cart.css';


const CartPage = (props) => {
  return (
    <div className="cart-page">
      <CartList  cart={props.cart} dispatch={props.dispatch} />
    </div>
  );
};

export default CartPage;

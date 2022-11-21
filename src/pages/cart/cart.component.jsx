import React from 'react';
import CartList from '../../components/cart/list';
import './cart.css';

const Cart = (props) => {
  return (
    <div className='cart'>
      <h2>Cart</h2>
      <CartList cart = {props.cart} />
    </div>
  );
};

export default Cart;
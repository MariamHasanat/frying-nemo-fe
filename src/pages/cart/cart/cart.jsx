import React from 'react';
import CartList from '../list/list.componant';
import './cart.css';


const CartPage = (props) => {
  return (
    <div className="cart-page">
      <CartList  />
    </div>
  );
};

export default CartPage;

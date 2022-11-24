import React from 'react';
import './cart.css';
import CartList from '../../components/cart/list/list.component';

const CartPage = () => {

  return (
    <div className='wrapper'>
      <h1>Cart</h1>
      <div className="body">
        <CartList />
      </div>
    </div>
  );
};

export default CartPage;

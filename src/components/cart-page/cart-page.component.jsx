import React from 'react';
import './cart-page.css';
import CartList from './cart-list/list.component';
import { useContext } from 'react';
import { CartContext } from '../providers/cart-provider.component';

const CartPage = (props) => {
  const cartContext = useContext(CartContext);
  return (
    <div className="cart-page">
      <CartList />
    </div>
  );
};

export default CartPage;
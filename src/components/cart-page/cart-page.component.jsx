import React from 'react';
import './cart-page.css';
import CartList from './cart-list/list.component';
import { useContext } from 'react';
import { CartContext } from '../providers/cart-provider.component';

const CartPage = (props) => {
  const cartContext = useContext(CartContext);
  const emptyCart = () => cartContext.dispatch({type: 'EMPTY'});
  return (
    <div className="cart-page">
      <CartList />
      <button onClick={emptyCart}>Empty My Cart</button>
    </div>
  );
};

export default CartPage;
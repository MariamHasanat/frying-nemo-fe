import React from 'react';
import { useContext } from 'react';
import CartList from '../../components/cart/list';
import { CartContext } from '../../components/providers/cart-provider.component';
import './cart.css';

const Cart = (props) => {
  const cartContext = useContext (CartContext) ;
  const clearCart = () => {cartContext.dispatch ({ type: "CLEAR"})}
  return (
    <div className='cart'>
      <div className="cart-header">
        <h2>Cart</h2>
        {cartContext.cart.length
          ? <button onClick={clearCart} className = 'nemo-button'>Clear All</button>
          : null
        }
      </div>
      <CartList cart = {props.cart} />
    </div>
  );
};

export default Cart;
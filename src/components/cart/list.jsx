import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../providers/cart-provider.component';
import CartRow from './row';

const CartList = (props) => {
  const cartContext = useContext (CartContext) ;
  return (
    <div className='list'>
      {
        cartContext.cart.map((cartItem, index) => 
        <CartRow key={"c-r" + index} item={cartItem} dispatch = {cartContext.dispatch} />
        )
      }
    </div>
  );
};

export default CartList;
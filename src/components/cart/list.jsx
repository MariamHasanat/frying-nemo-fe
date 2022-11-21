import React from 'react';
import CartRow from './row';

const CartList = (props) => {
  return (
    <div className='list'>
      {
        props.cart.map((cartItem, index) => 
        <CartRow key={"c-r" + index} item={cartItem} />
        )
      }
    </div>
  );
};

export default CartList;
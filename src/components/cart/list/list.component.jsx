//import { getToPathname } from '@remix-run/router';
import React from 'react';
import { useContext } from 'react';
import './list.css'
import { CartContext } from '../../providers/cart-provider.jsx';
import CartRow from '../row/row.component';
import {Trash} from 'phosphor-react'
const CartList = (props) => {

  const cartContext = useContext(CartContext);
  const clear = () => cartContext.dispatch({ type: 'CLEAR' })


  
  let total = 0;

  for (const item of cartContext.cart) {
    total += item.quantity * item.meal.price;
  }


  if (cartContext.cart.length === 0)
    return (
      <div className="no-results">
        <Trash size={300} />
        <p>Your Cart is Empty!</p>
      </div>
    );

  return (

    <>
      <ul className="cart-list">
        {
          cartContext.cart.map((item, index) => <CartRow item={item} dispatch={cartContext.dispatch} key={"r_" + index} />)
        }
      </ul>
      <div className='row-cart-clear'>
        <button className='nemo-button grey' onClick={clear}>Clear All</button>
        <span>TOTAL : ${total}</span>
      </div>
    </>
  );
};

export default CartList;

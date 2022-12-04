// import { CartContext } from "../../components/providers/cart-provider";
import React, { useContext } from 'react';

import './price-bar.css'

const Price = (props) => { 

  // const cartContext = useContext(CartContext);
  const handelIcrement = () => {

    props.dispatch({ type: 'Increment-cart-Quantity', meal: props.item });

  };


  const handelDecrement = () => {
    props.dispatch({ type: 'Decrement-cart-Quantity', meal: props.item });

  };


  return (
    <div class='ctrl'>
  <button class='ctrl__button ctrl__button--decrement'  onClick={handelIcrement}>+</button>
  <div class='ctrl__counter'>
    <input class='ctrl__counter-input ctrl__counter-num' type="number" max={500} value={props.cartQuantity} disabled/>
    {/* <div class='ctrl__counter-num'>0</div> */}
  </div>
  <button class='ctrl__button ctrl__button--increment' onClick={handelDecrement}>-</button>
</div>
   );
};
export default Price;
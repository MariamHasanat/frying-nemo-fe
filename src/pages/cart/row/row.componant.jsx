import React from 'react';

import trashIcon from '../../../assets/illustrations/trash.svg'
const CartRow = (props) => {
  const increment=()=>{
    props.dispatch({type:"INCREMENT_CART_QUANTITY",meal:props.cartItem.meal})
   }
   const decrement=()=>{
    props.dispatch({type:"DECREMENT_CART_QUANTITY",meal:props.cartItem.meal})
   }

  return (
    <li className="cart-row">
      <img src={props.cartItem.meal.image} alt="meal" />
      <div className="main-info">
        <h2>{props.cartItem.meal.name}</h2>
        <span className="item-price">
          ${props.cartItem.meal.price}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>In Stock</span></span>
        <button className="quantity-selector"  onClick={increment}> + </button> 
        {props.cartItem.quantity}   
        <button className="quantity-selector" onClick={decrement}>-</button>
        
          
        
        
      </div>
      <div className="total-price">
        <h3>${props.cartItem.meal.price * props.cartItem.quantity}</h3>
        <button>
          <img src={trashIcon} alt="delete" />Delete
        </button>
      </div>
    </li>
  );
};

export default CartRow;

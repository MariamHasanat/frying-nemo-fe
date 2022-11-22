import React from 'react';
// import trashIcon from '../../../public/trash.svg';

const CartRow = (props) => {
  const increment = () => props.dispatch({ type: "INCREMENT", meal: props.item.meal });
  const decrement = () => props.dispatch({ type: "DECREMENT", meal: props.item.meal });
  return (
    <li className="cart-row">
      <img src={props.cartItem.meal.image} alt="meal" />
      <div className="main-info">
        <h2>{props.cartItem.meal.name}</h2>
        <span className="item-price">
          ${props.cartItem.meal.price}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>In Stock</span></span>
        <div className="quantity-selector">
          <button onClick={increment} >&#43;</button>
          {props.cartItem.quantity}
          <button onClick={decrement}>&#8722;</button>
        </div>
      </div>
      <div className="total-price">
        <h3>${props.cartItem.meal.price * props.cartItem.quantity}</h3>
        <button>
          DELETE   {/* <img src={trashIcon} alt="delete" />Delete */}
        </button>
      </div>
    </li>
  );
};

export default CartRow;

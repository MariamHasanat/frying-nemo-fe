import React from 'react';
import trashIcon from '../../../assets/trash.svg';

const CartRow = (props) => {
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
          + {props.cartItem.quantity} -
        </div>
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
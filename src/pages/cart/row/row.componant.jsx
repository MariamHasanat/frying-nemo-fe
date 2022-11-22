import React from 'react';
import './row.css'
import trashIcon from '../../../assets/illustrations/trash.svg';
const CartRow = (props) => {
  const { meal, quantity } = props.cartItem;
  const increment = () => {
    props.dispatch({ type: "INCREMENT_CART_QUANTITY", meal });
  };
  const decrement = () => {
    props.dispatch({ type: "DECREMENT_CART_QUANTITY", meal });
  };
  const deletecart = () => {
    props.dispatch({ type: "DELETE_CART_ITEM", meal });
  };

  return (
    <li className="cart-row">
      <img src={meal.image} alt="meal" />
      <div className="main-info">
        <h2>{meal.name}</h2>
        <span className="item-price">
          ${meal.price}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>In Stock</span></span>
        <div className="quantity-selector">
          <button onClick={increment}> + </button>
          {quantity}
          <button onClick={decrement}>-</button>

        </div>

      </div>
      <div className="total-price">
        <h3>${meal.price * quantity}</h3>
        <button onClick={deletecart}>
          <img src={trashIcon} alt="delete" />  Delete
        </button>
      </div>
    </li>
  );
};

export default CartRow;

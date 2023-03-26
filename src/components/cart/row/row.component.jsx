import React from 'react';
import './row.css';

const CartRow = (props) => {
  const { meal, quantity } = props.cartItem;

  const increment = () => props.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal });
  const decrement = () => props.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal });
  const delete_item = () => props.dispatch({ type: 'DELETE_CART_ITEM', meal });
  return (
    <li className="cart-row">
        <img src={`${props.data.imageUrl}?x=${Math.random()}`} alt="food" />
      <div className="main-info">
        <div className="info">
          <h2>{meal.name}</h2>
          <span className="item-price">
            ${meal.price}
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span>In Stock</span></span>
        </div>
        <div className="quantity-selector">
          <button onClick={increment}>+</button>
          <span className="price-label">{quantity}</span>
          <button onClick={decrement}>-</button>
        </div>
      </div>
      <div className="total-price">
        <h3>${meal.price * quantity}</h3>
        <button onClick={delete_item}>
          <img src="https://cdn-icons-png.flaticon.com/512/1799/1799391.png" alt="delete" />Delete
        </button>
      </div>
    </li>
  );
};

export default CartRow;

import React from 'react';
import {Trash} from 'phosphor-react';
import './row.css';

const CartRow = (props) => {
  const { meal, quantity } = props.item;

  const increment = () => props.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal });
  const decrement = () => props.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal });
  const deleteItem = () => props.dispatch({ type: 'DELETE_CART_ITEM', meal });

  return (
    <li className="cart-row">
      <img src={meal.imageUrl} alt="meal" />
      <div className="main-info">
        <h2>{meal.name}</h2>
        <span className="item-price">
          ${meal.price}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>In Stock</span></span>
        <div className="quantity-selector">
          <button onClick={increment}>&#43;</button>
          {quantity}
          <button onClick={decrement}>&#8722;</button>
        </div>
      </div>
      <div className="total-price">
        <h3>${meal.price * quantity}</h3>
        <button className='paddingUp' onClick={deleteItem}>
        <Trash size={20} />Delete
        </button>
      </div>
    </li>
  );
};

export default CartRow;

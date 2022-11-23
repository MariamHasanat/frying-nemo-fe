import React from 'react';

const CartRow = (props) => {
  const increment = () => props.dispatch({ type: "INCREMENT", meal: props.item.meal });
  const decrement = () => props.dispatch({ type: "DECREMENT", meal: props.item.meal });
  const deleteItem = () => props.dispatch ({ type: "DELETE" , meal: props.item.meal });
  return (
    <div className='row'>
      <div className='cart-item-img'>
        <img src={props.item.meal.image} alt="orderedMeal" />
      </div>
      <div className="cart-info">
        <h3>{props.item.meal.name}</h3>
        <span className="item-price">
          ${props.item.meal.price}
          &nbsp; &nbsp;| &nbsp; &nbsp;
          <span className='In-Stock'>In Stock</span>
        </span>
        <div className="quantity-selector">
          <button
            onClick={decrement}
          >&#x2212;</button>
          <span>{props.item.quantity} </span>
          <button
            onClick={increment}
          >&#x2b;</button>
        </div>
      </div>
      <div className="total-price">
        <span>${props.item.quantity * props.item.meal.price}</span>
        <button onClick={deleteItem}>
          <img src="./trash.png" alt="trash" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default CartRow;
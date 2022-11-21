import React from 'react';

const CartRow = (props) => {
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
          + &nbsp; {props.item.quantity} &nbsp; -
        </div>
      </div>
      <div className="total-price">
        {props.item.quantity * props.item.meal.price}
        <img src="./trash.png" alt="trash" />
      </div>
    </div>
  );
};

export default CartRow;
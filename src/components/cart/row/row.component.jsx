import React from 'react';


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
          <button>&#43;</button>
          {props.cartItem.quantity}
          <button>&#8722;</button>
        </div>
      </div>
      <div className="total-price">
        <h3>${props.cartItem.meal.price * props.cartItem.quantity}</h3>
        <button>
          <img src={"https://cdn-icons-png.flaticon.com/512/1828/1828851.png"} />Delete
        </button>
      </div>
    </li>
  );
};

export default CartRow;

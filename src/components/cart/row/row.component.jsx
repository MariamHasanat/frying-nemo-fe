import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../common/Provider/cart-provider-component';

const CartRow = (props) => {
  const ContextCart = useContext(CartContext);
  const inc=()=>{
    ContextCart.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.cartItem.meal });
  }
  const dec=()=>{
    ContextCart.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.cartItem.meal });
  }
  const itemDelete=()=>{
    ContextCart.dispatch({ type: 'DELETE_CART_ITEM', meal: props.cartItem.meal });
  }
  return (
 
        

    <li className="cart-row">
      <img src={props.cartItem.meal.imageUrl} alt="meal" />
      <div className="main-info">
        <h2>{props.cartItem.meal.name}</h2>
        <span className="item-price">
          ${props.cartItem.meal.price}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>In Stock</span></span>
        <div className="quantity-selector">
          <button onClick={inc}>&#43;</button>
          {props.cartItem.quantity}
          <button onClick={dec}>&#8722;</button>
        </div>
      </div>
      <div className="total-price">
        <h3>${props.cartItem.meal.price * props.cartItem.quantity}</h3>
        <button onClick={itemDelete}>
          <img src={"https://cdn-icons-png.flaticon.com/512/1828/1828851.png"} />Delete
        </button>
      </div>
    </li>
   
  );
};

export default CartRow;

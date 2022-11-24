import React from 'react';
import CartRow from './row/row.component';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider.component';
import './list.css';

const CartList = (props) => {
  const cartContext = useContext(CartContext);
  const emptyCart = () => cartContext.dispatch({type: 'EMPTY'});
  if (cartContext.cart.length === 0){
    <div className="no-results">
        <img src="https://cdn-icons-png.flaticon.com/512/1978/1978026.png" alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
  };
  let totalCartPrice = 0;

  for(const item of cartContext.cart){
    totalCartPrice += item.quantity * item.meal.price;
  }

  return (
    <div>
       <ul className="cart-list">
        {
          cartContext.cart.map((cartItem, index) => <CartRow cartItem={cartItem} dispatch={cartContext.dispatch} key={"r_" + index} />)
        }
      </ul>
      <button onClick={emptyCart}>Empty My Cart</button>
      <span>your total price is {totalCartPrice}</span>
      </div>
  );
};

export default CartList;
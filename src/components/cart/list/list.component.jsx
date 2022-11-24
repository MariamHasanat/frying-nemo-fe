import React from 'react';
import CartRow from '../row/row.component';
import "./list.css";

const CartList = (props) => {
  let total= 0;
  for(const element of props.cart){
    total+= element.meal.price * element.quantity
  }
  const clear = () => props.dispatch({ type: 'CLEAR_CART' });
  return (
    <>
      {props.cart.length
        ? <ul className="cart-list">
          {
            props.cart.map((item, index) => <CartRow item={item} dispatch={props.dispatch} key={"r_" + index} />)
          }
        </ul>
        : <div className="no-results">
          <div className="cart-empty-image"></div>
          <p className="cart-empty-text">Your Cart is Empty!</p>
        </div>
      }
      <div className='cart-list-total-clear-container'>
        <span className='cart-total-span'>Total= {total}$</span>
        <button onClick={clear}>Clear</button>
      </div>
      
    </>
  );
};

export default CartList;
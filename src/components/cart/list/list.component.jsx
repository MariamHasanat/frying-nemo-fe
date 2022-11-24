import React from 'react';
import CartRow from '../row/row.component';
import "./list.css";
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider.component';

const CartList = (props) => {
  const cartContext= useContext(CartContext);
  let total= 0;
  for(const element of cartContext.cart){
    total+= element.meal.price * element.quantity
  }
  const clear = () => cartContext.dispatch({ type: 'CLEAR_CART' });
  return (
    <>
      {cartContext.cart.length
        ? <ul className="cart-list">
          {
            cartContext.cart.map((item, index) => <CartRow item={item} dispatch={cartContext.dispatch} key={"r_" + index} />)
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
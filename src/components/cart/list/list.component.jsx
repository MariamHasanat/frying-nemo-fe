import React from 'react';
import CartRow from '../row/row.component';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider.component';


const CartList = (props) => {
  const cartContext = useContext(CartContext);
  const clear =()=> cartContext.dispatch({type  : "clear "})
  if (cartContext.cart.length === 0) {
    return (
      <div className="no-results">
        <img src="./empty_cart.webp" alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
    );
  }
  let total =0;
  for(const item of cartContext.cart){
    total += item.quantity * item.meal.Price ;
  }
  return (

      <ul className="cart-list">
        {
          cartContext.cart.map((item, index) => <CartRow item={item} key={"r_" + index} dispatch={cartContext.dispatch} />)
        }
    <div className='cartBottomRow'>
      <button className='nemo-button' onClick={clear}>clear cart </button>
      <span>total: ${total}</span>
    </div>
      </ul>
    
    
  );
}

export default CartList;

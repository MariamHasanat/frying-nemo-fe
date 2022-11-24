import React, { useContext } from 'react';
import { CartContext } from '../../core/providers/cart-provider.component';
import CartRow from '../row/row.component';

const CartList = () => {
  const { cart, dispatch } = useContext(CartContext);
  return (
    cart.length
      ? <div className='carts-container'>
        <ul className="cart-list">
          {
            cart.map((cartItem, index) => <CartRow cartItem={cartItem} key={"r_" + index} />)
          }
        </ul>
        <div className="footer">
          <button className='clear-all' onClick={() => { dispatch({ type: 'CLEAR' }); }}><i className="gg-trash"></i></button>
          <p><span className='bold'>Total</span>: {`${cart.reduce((accumulator, cartItem) => accumulator + parseInt(cartItem.item.price*cartItem.quantity), 0)}`}$</p>
        </div>
      </div>
      : <div className="no-results">
        <img className='not-found' src="https://homebond.ae/assets/images/no-result.png" alt="empty cart" />
        <p>Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;
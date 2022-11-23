import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider';
import CartRow from '../row/row.component';
import emptyCart from '../../../assets/images/empty-cart.jpg';
import './list.css';

const CartList = () => {
  const cartContext = useContext(CartContext);
  const resetCart = () => cartContext.dispatch({ type: "RESET" });
  console.log('cart: ' + cartContext.cart);

  return (
    cartContext.cart.length
      ?
      <>
        <div className="cart-body">
          <ul className="cart-list">
            {
              cartContext.cart.map((item, index) =>
                <CartRow
                  item={item}
                  dispatch={cartContext.dispatch}
                  key={"r_" + index}
                />
              )
            }
          </ul>
          <div className="cart-actions">
            <h2>Total Amount: <span className='cart-total-price'>{cartContext.amount} $</span> </h2>
            <div className="actions-buttons">
              <button className='check-out'>Checkout</button>
              <button className='clear-all' onClick={resetCart}>Clear All</button>
            </div>
          </div>
        </div>
      </>
      : <div className="no-results" style={{ textAlign: 'center' }}>
        <img src={emptyCart} alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider';
import CartRow from '../row/row.component';
import emptyCart from '../../../assets/images/empty-cart.jpg';

const CartList = () => {
  const cartContext = useContext(CartContext);
  console.log('cart: ' + cartContext.cart);
  return (
    cartContext.cart.length
      ? <ul className="cart-list">
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
      : <div className="no-results" style={{ textAlign: 'center' }}>
        <img src={emptyCart} alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;
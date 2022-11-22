import React, { useContext } from 'react';
import { UserContext } from '../../core/providers/user-provider.component';
import CartRow from '../row/row.component';

const CartList = () => {
  const {cart, dispatch} = useContext(UserContext);
  return (
    cart.length
      ? <ul className="cart-list">
        {
          cart.map((cartItem, index) => <CartRow cartItem={cartItem} key={"r_" + index} />)
        }
      </ul>
      : <div className="no-results">
        <img src="./empty_cart.webp" alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
  );
};

export default CartList;

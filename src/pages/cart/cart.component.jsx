import React, { useContext } from 'react';
import './cart.css';
import CartList from '../../components/cart/list/list.component';
import { UserContext } from '../../components/core/providers/user-provider.component';

const CartPage = (props) => {

  const {cart} = useContext(UserContext);
  return (

    <div className="cart-page">
      <CartList/>
    </div>
  );
};

export default CartPage;
import React from 'react';
import CartList from '../../components/cart.component/list/list';
import './cart.css';
// import CartList from '../../components/cart/list/list.component';

const CartPage = (props) => {
  return (
    <div className="cart-page">
      {/* <CartList /> */}
    <CartList/>
    </div>
  );
};

export default CartPage;
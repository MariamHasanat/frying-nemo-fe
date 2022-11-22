import React , {useContext}from 'react';
import CartList from '../../components/cart.component/row/row';
import { CartContext } from '../../components/providers/cart-provider';
import './cart.css';

const CartPage = (props) => {

  
  const cartContext = useContext(CartContext);


  return (
    <div className="cart-page">
      <CartList cart={props.cart}  />
    </div>
  );
};

export default CartPage;

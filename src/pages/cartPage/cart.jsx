import React from 'react';
import CartList from '../../components/cart.component/list/list';
import { CartContext } from '../../components/providers/cart-provider';
import './cart.css';
import { useContext } from 'react';

const CartPage = (props) => {
  const cartContext = useContext(CartContext);

  const Empty=()=>{
  

    
  }

  let totalCount = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    totalCount += cartContext.cart[i].quantity*cartContext.cart[i].meal.price;
  }
  

  return (
    <div className="cart-page">
    <CartList/>
    <span className='total-price'> Total Price : {totalCount}</span>
    <br />
    <button className='empty-btn' 
    onClick={Empty}
    >
      Empty Cart</button>
    </div>
  );
};

export default CartPage;
import React from 'react';
import { useContext } from 'react';

import { CartContext } from '../../../components/provider/cartprovider';
import CartList from '../list/list.componant';
import './cart.css';


const CartPage = (props) => {
  const cartContext = useContext(CartContext);
  let totalPrice = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    totalPrice += (cartContext.cart[i].quantity*cartContext.cart[i].meal.price);
  }
  
  // const deletecart = () => {
  //   for (let i = 0; i < cartContext.cart.length; i++) {
  //     const dd = cartContext.cart[i].meal;
  //   cartContext.dispatch({ type: "DELETE_CART_ITEM",dd});
  // };
// }
  return (
    <>
    <div className="cart-page">
      <CartList  />
    </div>
    <div className='totalpriceforcart'>Total Prise: {totalPrice}$</div>
   {/* <button className='clearAllCart' onClick={deletecart}>clear</button> */}
    </>
  );
};

export default CartPage;

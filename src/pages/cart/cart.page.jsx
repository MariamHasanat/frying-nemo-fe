import React from 'react';
import './cart.css';
import CartList from '../../components/cart/list/list.component';
import { useContext } from 'react';
import { CartContext } from '../../common/Provider/cart-provider-component';

const CartPage = (props) => {
  const ContextCart = useContext(CartContext);
 
const Clearall=()=>{
  ContextCart.dispatch({ type: "DELETE_ALL_ITEM", meal: props.data });

}
    
  
 
    
  
  return (
    <div className="cart-page">
    <div>
      { ContextCart.cart.length ? <button className='clear' onClick={Clearall}>ClearALL</button>:""}
      </div>
      <CartList  />
    </div>
  );
};

export default CartPage;

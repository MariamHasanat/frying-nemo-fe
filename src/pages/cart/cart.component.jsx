import React from 'react';
import { useContext } from 'react';
import CartList from '../../components/cart/list';
import { CartContext } from '../../components/providers/cart-provider.component';
import './cart.css';

const Cart = (props) => {
  const cartContext = useContext (CartContext) ;
  const clearCart = () => {cartContext.dispatch ({ type: "CLEAR"})}
  const totalCartPRice = cartContext.cart.reduce ((total , item)=> {return total + item.meal.price * item.quantity} , 0) ;
  return (
    <div className='cart'>
      
        <h2>Cart</h2>
        {cartContext.cart.length
          ? <div className="cart-header">
              <span>Total price : {totalCartPRice}</span>
              <button onClick={clearCart} className = 'nemo-button'>Clear All</button>
            </div>
          : null
        }
      
      <CartList cart = {props.cart} />
    </div>
  );
};

export default Cart;
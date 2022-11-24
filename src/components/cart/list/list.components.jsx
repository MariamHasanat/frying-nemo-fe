import React from 'react';
import CartRow from '../../cart/row/row.component';
import "./list.css";
import { useContext } from 'react';
import { CartContext } from '../../provider/cart-provider.component';

const CartList = (props) => {
  const cartContext = useContext(CartContext);
  const cartEmpty = () => cartContext.dispatch({ type: 'CLEAR_CART'});

  if (cartContext.cart.length ===0) {
    return (
      <div className="no-results">
      <img src="https://i0.wp.com/darwishzahwan.com/wp-content/uploads/2015/05/uciBhP05-300x3001.jpeg?fit=300%2C300&ssl=1سسس" alt="empty cart" width={300} />
      <p>Your Cart is Empty!</p>
    </div>
    );
    
  }
 let total =0;
 for(const currentItem of cartContext.cart){
  total+= currentItem.quantity * currentItem.meal.price;
 }
 

  return (
    <>
    <ul className="cart-list">
        {
          cartContext.cart.map((cartItem, index) => <CartRow cartItem={cartItem} key={"r_" + index} dispatch={cartContext.dispatch} />)
        }
      </ul>
      <div className='cart-details'>
        <button onClick={cartEmpty}>Delete cart</button>
        <span>Total:{total}</span>
      </div>
     </>
  );
};

export default CartList;

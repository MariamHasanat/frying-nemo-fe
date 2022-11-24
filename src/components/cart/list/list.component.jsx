import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../provider/cart.provider';
import CartRow from './row/row.component';

const CartList = (props) => {
  const cartContext = useContext(CartContext);


  const TotalPrice = () => {
    let Total = 0;
    
    const cart = cartContext.cart;
    for (let i = 0; i < cart.length; i++) {
        Total += (cart[i].meal.price * cart[i].quantity);
    }
    return price;
};



const deleteAll = () => {
    cartContext.dispatch({ type: 'DELETE_ALL_ITEMS'});
};

  return (
    <div>
    cartContext.cart.length
      ? <ul className="cart-list">
        {
          cartContext.cart.map((item, index) => <CartRow item={item} dispatch={cartContext.dispatch} key={"r_" + index} />)
        }
      </ul>
      : <div className="no-results">
        <img src="./empty_cart.webp" alt="empty cart" width={300} />
        <p>Your Cart is Empty!</p>
      </div>
      
<div>
<span>total price: ${TotalPrice()}</span>
<button onClick={deleteAll}>delete all</button>
</div>
</div>
  );
};

export default CartList;

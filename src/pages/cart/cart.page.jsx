import React from 'react';
import './cart.css';
import CartList from '../../components/cart/list/list.component';
import { useContext } from 'react';
import { CartContext } from '../../common/Provider/cart-provider-component';


const CartPage = (props) => {
  const ContextCart = useContext(CartContext);

  const Clearall = () => {
    ContextCart.dispatch({ type: "DELETE_ALL_ITEM", meal: props.data });

  };

  let total = 0;
  for (const item of ContextCart.cart) {
    total += item.quantity * item.meal.price;
  }


  return (
    <div className="cart-page">
  
      <CartList />
      <div>
        {
          ContextCart.cart.length
            ? <span className='right'><span>Total:{total}</span>  <button className='clear' onClick={Clearall}>ClearALL</button></span>
            : ""
        }
      </div>
    </div>
  );
};

export default CartPage;

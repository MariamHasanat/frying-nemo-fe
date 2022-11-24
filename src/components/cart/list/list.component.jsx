import React from "react";
import { useContext } from "react";
import { CartContext } from "../../provider/cart-provider.component";
import CartRow from "../row/row.component";




const CartList = (props) => {

  const cartContext = useContext(CartContext);

  const clear = () => cartContext.dispatch({ type: 'CLEAR' });
  if (cartContext.cart.length === 0) {
    return (
      <div>
         <img src={process.env.PUBLIC_URL + '/vgh.jpg'} />;
        <h1>your cart is empty</h1>
      </div>
    );

  }
  let total = 0;
  for (const item of cartContext.cart  ) {
    total += item.quantity * item.meal.price;
  }
  return (
    <>
      <ul>
        {
          cartContext.cart.map((item, index) =>
            <CartRow item={item} dispatch={cartContext.dispatch} key={index} />
          )
        }
      </ul>
      <div>
        <button onClick={clear}>clear cart </button>
        <span>{total}</span>
      </div>
      </>
  );
};

export default CartList;
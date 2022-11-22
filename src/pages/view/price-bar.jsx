import { CartContext } from "../../components/providers/cart-provider";
import React, { useContext } from 'react';



const Price = (props) => { 

  const cartContext = useContext(CartContext);
  const handelIcrement = () => {

    cartContext.dispatch({ type: 'Increment-cart-Quantity', meal: props.item });

  };


  const handelDecrement = () => {
    cartContext.dispatch({ type: 'Decrement-cart-Quantity', meal: props.item });

  };


  return (
    <div className="price">
      <div className="add-cart">
        <button onClick={handelIcrement}>+</button>
        <input type="number" max={500} value={props.cartQuantity} disabled />
        <button onClick={handelDecrement}>-</button>
      </div>
    </div>);
};
export default Price;
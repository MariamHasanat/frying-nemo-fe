import React from "react";
import { useContext } from "react";
import CartContext from "../provider/cart-provider.component";
import CartRow from "./row.component";



const CartList =(props) =>{
  const cartContext = useContext(cartContext);
  return(
    cartContext.cart.length ?
    <ul>
      {
        cartContext.cart.map ((item , index ) =>
        <CartRow item={item} dispatch ={cartContext.dispatch} key ={index} />
        )
      }
    </ul>
    :<div>
      <h1>your cart is empty</h1>
    </div>
  )
}

export default CartList
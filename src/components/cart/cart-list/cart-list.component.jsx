import { useState } from "react";
import { useContext } from "react";
import { getCartQuantity, getCartValue } from "../../../utility/cart";
import { CartContext } from "../../providers/cart-provider.component";
import CartRow from "../row/row.component";

const CartList = (props) => {
  const cartContext = useContext(CartContext);

  const clear = () => {
    cartContext.dispatch({ type: "DELETE_CART_ITEMS" });
  };

  return cartContext.cart.length ? (
    <ul className="cart-list">
      {cartContext.cart.map((cartItem, index) => (
        <CartRow
          dispatch={cartContext.dispatch}
          cartItem={cartItem}
          key={index}
        />
      ))}
      <p className="total-value">
        Total Price: ${getCartValue(cartContext.cart)}
        <button className="clear" onClick={clear}>
          Clear Cart
        </button>
      </p>
    </ul>
  ) : (
    <div className="empty-cart">
      <img src={process.env.PUBLIC_URL + "/angry.png"} alt="" width={100} />
      <p>Your Cart is Empty?</p>
    </div>
  );
};

export default CartList;

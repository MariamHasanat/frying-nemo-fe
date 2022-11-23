import { useState } from "react";
import { useContext } from "react";
import CartList from "../../components/cart/cart-list/cart-list.component";
import CartContext from "../../components/providers/cart-provider.component";
import { getCartValue } from "../../utility/cart";
import "./cart.css";

const CartPage = (props) => {

  return (
    <div className="cart-page">
      <CartList/>
    </div>
  );
};

export default CartPage;

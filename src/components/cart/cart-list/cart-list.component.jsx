import { useContext } from "react";
import { CartContext } from "../../providers/cart-provider.component";
import CartRow from "../row/row.component";

const CartList = (props) => {

  const cartContext = useContext(CartContext);

  return (
    cartContext.cart.length ?
      <ul className="cart-list">
        {
          cartContext.cart.map((cartItem, index) => <CartRow dispatch={cartContext.dispatch} cartItem={cartItem} key={index} />)
        }
      </ul>
      :
      <div className="empty-cart">
        <img src={process.env.PUBLIC_URL + "/angry.png"} alt="" width={100} />
        <p>Your Cart is Empty?
        </p>
      </div>
  );
};

export default CartList;
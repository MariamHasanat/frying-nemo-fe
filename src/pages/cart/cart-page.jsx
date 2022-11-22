import { useContext } from "react";
import CartList from "../../components/cart/cart-list/cart-list.component";
import CartContext from "../../components/providers/cart-provider.component";
import './cart.css';

const CartPage = (props) => {
  // const cartContext = useContext(CartContext);

  return (
    <div className="cart-page">
      <CartList />
    </div>
  );
};

export default CartPage;
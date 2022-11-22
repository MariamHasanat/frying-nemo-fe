import CartList from "../../components/cart/cart-list/cart-list.component";
import './cart.css'

const CartPage = (props) => {
  return (
    <div className="cart-page">
      <CartList cart={props.cart} dispatch={props.dispatch}/>
    </div>
  );
};

export default CartPage;
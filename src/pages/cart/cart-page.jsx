import CartList from "../../components/cart/cart-list/cart-list.component";

const CartPage = (props) => {
  return (
    <div className="cart">
      <CartList cart={props.cart} dispatch={props.dispatch}/>
    </div>
  );
};

export default CartPage;
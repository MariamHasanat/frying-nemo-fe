import CartRow from "../row/row.component";

const CartList = (props) => {
  console.log(props.cart.length);
  return (
    props.cart.length ?
      <ul className="cart-list">
        {
          props.cart.map((cartItem, index) => <CartRow cartItem={cartItem} key={index}/>)
        }
      </ul>
      :
      <div>
        <img src={process.env.PUBLIC_URL + "/angry.png"} alt="" width={100} />
        <p>Your Cart is Empty?
        </p>
      </div>
  );
};

export default CartList;
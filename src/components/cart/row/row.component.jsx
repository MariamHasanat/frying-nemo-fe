
const CartRow = (props) => {

  const handleIncrement = () => {
    props.dispatch({ type: "INCREMENT_CART_QUANTITY", meal: props.cartItem.meal });
  };

  const handleDecrement = () => {
    props.dispatch({ type: "DECREMENT_CART_QUANTITY", meal: props.cartItem.meal });
  };

  const deleteItem = () => {
    props.dispatch({ type: 'DELETE_CART_QUANTITY' , meal: props.cartItem.meal});
  };

  return (
    <li className="cart-row">
      <img src={props.cartItem.meal.image} alt="meal" />
      <div className="main-info">
        <h2>{props.cartItem.meal.name}</h2>
        <span className="item-price">
          ${props.cartItem.meal.price}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>In Stock</span></span>
        <div className="quantity-selector">
          <button onClick={handleIncrement}>&#43;</button>
          {props.cartItem.quantity}
          <button onClick={handleDecrement}>&#8722;</button>
        </div>
      </div>
      <div className="total-price">
        <h3>${props.cartItem.meal.price * props.cartItem.quantity}</h3>
        <button onClick={deleteItem}>
          <img src={process.env.PUBLIC_URL + "/trash.svg"} alt="" />Delete
        </button>
      </div>
    </li>
  );
};


export default CartRow;
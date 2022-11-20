

const CartRow = (props) => {
  return (
    <li className="cart-row">
      <img src={props.cartItem.meal.image} alt="" width={70} />
      <div className="main-info">
        <h2>{props.cartItem.meal.name}</h2>
        <span className="item-price">{props.cartItem.meal.price} |  <span>In Stock</span></span>
        <div className="quantity-selector">+ {props.cartItem.quantity} -</div>
      </div>
      <div className="price-info">
        <h3>{props.cartItem.meal.price * props.cartItem.quantity}</h3>
        <img src="" alt="" />
      </div>
    </li>
  );
};

export default CartRow;


const CartRow = (props) => {
  const { meal, quantity } = props.item;
  const increment = () => props.dispatch({ type: 'INCREMENT_CART_QUANTITY ', meal });
  const decrement = () => props.dispatch({ type: 'DECREMENT_CART_QUANTITY ', meal });
  return (
    <li>
      <h2>{meal.name}</h2>
      <span>{meal.price}</span>
      <div className="quantity-selector">
        <button onClick={increment}>&#43;</button>
        {quantity}
        <button onClick={decrement}>&#8722;</button>
        <h3>${meal.price * quantity}</h3>
        <button>Delete</button>
      </div>

    </li>

  );
};

export default CartRow;



import './row.css';

const CartRow = (props) => {
  const { meal, quantity } = props.item;
  const increment = () => props.dispatch({ type: 'INCREMENT_CART_QUANTITY ', meal });
  const decrement = () => props.dispatch({ type: 'DECREMENT_CART_QUANTITY ', meal });
  const deletItem = () => props.dispatch({ type: 'DELETE_CART_ITEM', meal });
  return (
    <li className='cart-row'>
      <div className="main-info">
        <h2>{meal.name}</h2>
        <span className="item-price">{meal.price}</span>
        <div className="quantity-selector">
          <button onClick={increment}>&#43;</button>
          {quantity}
          <button onClick={decrement}>&#8722;</button>
          <h3>${meal.price * quantity}</h3>
        </div>
        <div>
        <div className="total-price">
        <h3>${meal.price * quantity}</h3>
          <button
            onClick={deletItem}
          >delete</button>
        </div>
        </div>
      </div>

    </li>

  );
};

export default CartRow;



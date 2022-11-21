
const Price = (props) => {


  const handleIncrement = () => {
    props.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.item });

  };

  const handleDecrement = () => {
    props.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.item });
    

  };

  
  return (
  <div className="price">
    <div className="add-cart">
      <button onClick={handleIncrement } >+</button>
      <input type="number" max={500} value={props.cartQuantity} />
      <button onClick={handleDecrement}>-</button>
    </div>
  </div>);
};
export default Price;





const Price = (props) => {
  const handelIcrement = () => {

    props.dispatch({ type: 'Increment-cart-Quantity', meal: props.item });

  };


  const handelDecrement = () => {
    props.dispatch({ type: 'Decrement-cart-Quantity', meal: props.item });

  };


  return (
    <div className="price">
      <div className="add-cart">
        <button onClick={handelIcrement}>+</button>
        <input type="number" max={500} value={props.cartQuantity} />
        <button onClick={handelDecrement}>-</button>
      </div>
    </div>);
};
export default Price;




const Price = (props) => {
  const handelIcrement = () => {

    props.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.item });

  };


  const handelDecrement = () => {
    props.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.item });

  };


  return (
    <div className="price">
      <div className="add-cart">
        <button onClick={handelIcrement}>+</button>
        <input type="number" max={500} value={0} />
        <button onClick={handelDecrement}>-</button>
      </div>
    </div>);
};
export default Price;
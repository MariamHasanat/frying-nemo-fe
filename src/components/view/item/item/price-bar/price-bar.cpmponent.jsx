import React from "react";


const PriceBar = (props) => {
  const handleIncrement = () => {
    props.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.item });
  };

  const handleDecrement = () => {
    props.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.item });
  };

  return (
    <div className="price">
      <span>${props.item.price}</span>
      <div className="add-cart">
        <button onClick={handleIncrement}>+</button>
        <input type="number" max={500} value={0} disabled />
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default PriceBar;

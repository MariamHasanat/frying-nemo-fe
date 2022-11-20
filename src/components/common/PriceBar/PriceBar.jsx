import React from 'react'
import "./pricebar.css"
const PriceBar = (props) => {
  const handleIncrement = () => {
    props.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.data });
  };

  const handleDecrement = () => {
    props.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.data });
  };
  const handleDelete= () => {
    props.dispatch({ type: "DELETE_CART_ITEM", meal: props.data });
  };

  return (
    <div className="price">
      <span>${props.data.price}</span>
      <div className="add-cart">
        <button onClick={handleIncrement}>+</button>
        <input type="number" max={500} value={props.cartQuantity} disabled />
      
        <button onClick={handleDecrement}>-</button>
     
      </div>
    </div>
  );
};


export default PriceBar
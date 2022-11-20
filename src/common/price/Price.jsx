import React from 'react'

const Price = (props) => {
  const handelIncrement = () => {
    props.dispatch({ type: 'Increment', meal: props.item });
  }
  const handelDecrement = () => {
    props.dispatch({ type: 'Decrement', meal: props.item });
  }

  return (
    <div className="price">
    <span>${props.item.price}</span>
    <div className="add-cart">
      <button onClick={handelIncrement}>+</button>
      <input type="number" max={500} value={props.getCartQuntity}/>
      <button onClick={handelDecrement}>-</button>
    </div>
  </div>
  )
}

export default Price;

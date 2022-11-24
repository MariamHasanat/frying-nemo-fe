import React from 'react'
import './rowlist.css'


const RowList = (props) => {
  const { meal , quantity} = props.cartItem;

 
  const handelIncrement = () => {
    props.dispatch({ type: 'Increment', meal });
  }
  const handelDecrement = () => {
    props.dispatch({ type: 'Decrement', meal});
  }

  const handelDelete = () => {
    props.dispatch({ type: 'Delete', meal});
  }
 

  return (
    <div className="row-group">
      <div className="image">
       <img src={meal.image} alt=""/>
      </div>
      <div className="item-info">
         <span>{meal.name}</span> <br/>
         <span>${meal.price}</span><br/>
         <button onClick={handelIncrement}>+</button>
         <span>{quantity}</span>
         <button onClick={handelDecrement}>-</button>
      </div>
      <div className="total">
         <span onClick={handelDelete}>x</span>
         <h3>${meal.price*quantity}</h3>
     
      </div>
      
    </div>
  )
}

export default RowList;

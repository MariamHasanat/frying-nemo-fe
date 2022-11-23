import React from 'react'
import './rowlist.css'
import { useContext } from 'react';
import { CartContext } from '../../../components/add/form/provider/CartProvider';

const RowList = (props) => {
  const { meal , quantity} = props.cartItem;
  const cartContext = useContext(CartContext);
  let totalPrice = 0;
   for (let i = 0; i < cartContext.cart.length; i++) {
    totalPrice += (cartContext.cart[i].quantity * cartContext.cart[i].meal.price);
   }
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

export default RowList

import React from 'react'
import './rowlist.css'

const RowList = (props) => {
  
  return (
    <div className="row-group">
      <div className="image">
       <img src={props.cartItem.meal.image} alt=""/>
      </div>
      <div className="item-info">
         <span>{props.cartItem.meal.name}</span> <br/>
         <span>${props.cartItem.meal.price}</span><br/>
         <button>+</button>
         <span>{props.cartItem.quantity}</span>
         <button>-</button>
      </div>
      <div className="total">
         <span>x</span>
         <h3>${props.cartItem.meal.price*props.cartItem.quantity}</h3>
      </div>
    </div>
  )
}

export default RowList

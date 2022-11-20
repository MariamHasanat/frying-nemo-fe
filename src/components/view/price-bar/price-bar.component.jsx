import React from 'react'

const PriceBar = (props) => {
  const incrementHandler = () => {
    props.dispatch ({type : "INCREMENT" , meal : props.item}) ;
  }
  const decrementHandler = () => {
    props.dispatch ({type : "DECREMENT" , meal : props.item}) ;
  }
  return (
    <div className='price'>
        <span >{props.item.price} $</span>
        <div className='add-cart'> 
          <button onClick={decrementHandler}> - </button>
          <input type="number" className='ordersCount' disabled value={props.cartQuantity}/>
          <button onClick={incrementHandler}> + </button>
        </div>
      </div>
  )
}

export default PriceBar ;

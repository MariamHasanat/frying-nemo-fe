import React from 'react'

const PriceBar = (props) => {
  return (
    <div className='price'>
        <span >{props.item.price} $</span>
        <div className='add-cart'> 
          <button> - </button>
          <input type="number" className='ordersCount' />
          <button> + </button>
        </div>
      </div>
  )
}

export default PriceBar ;

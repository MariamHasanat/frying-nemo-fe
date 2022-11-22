import React from 'react'
import RowList from '../List-row/RowList';

const ListCartpage = (props) => {
  return (
    props.cart.length ? <ul>
      { props.cart.map((cartItem , index) =>
         <RowList cartItem={cartItem} dispatch={props.dispatch} key={index}/>
         )}
      </ul>
      :
      <p>there is no thing here</p>
    
  )
}

export default ListCartpage


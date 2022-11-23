import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../../components/add/form/provider/CartProvider';
import RowList from '../List-row/RowList';

const ListCartpage = (props) => {

  const cartContext = useContext(CartContext);

  return (
    cartContext.cart.length ? <ul>
      { cartContext.cart.map((cartItem , index) =>
         <RowList cartItem={cartItem} dispatch={cartContext.dispatch} key={index}/>
         )}
      </ul>
      :
      <p>there is no thing here</p>
    
  )
}

export default ListCartpage


import React , { useReducer } from 'react'
import {reducer , intialState} from '../../../../reducer/reducer'
export const CartContext = React.createContext(null);

const CartProvider = (props) => {

  const [cart , dispatch] = useReducer(reducer , intialState);

 return(
    <CartContext.Provider  value={{cart , dispatch}}>
      {props.children}
   </CartContext.Provider>
 )
}

export default CartProvider
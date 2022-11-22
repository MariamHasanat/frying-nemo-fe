import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider';
import CartRow from '../row/row';
import { ReactComponent as Empty } from '../../../assets/empty.svg';
const CartList = (props) => {
  const cartContext = useContext(CartContext);
  return (
    cartContext.cart.length
      ? <ul className="cart-list">
        {
          cartContext.cart.map((item, index) => <CartRow item={item} dispatch={cartContext.dispatch} key={"r_" + index} />)
       
       }
      </ul>
      : <div className="no-results">
        <Empty style={{width:'500'}}/>
      </div>
  );
};

export default CartList;
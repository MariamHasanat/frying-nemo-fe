import React from 'react';
import CartRow from '../row/row.component';
import { CartContext } from '../../../common/Provider/cart-provider-component';
import { useContext } from 'react';

const CartList = (props) => {
  const ContextCart = useContext(CartContext);
  return (
    ContextCart.cart.length
      ? <ul className="cart-list">
        {
          ContextCart.cart.map((cartItem, index) => <CartRow cartItem={cartItem} key={"r_" + index} />)
        }
      </ul>
      : <div className="no-results">
        <img src='https://th.bing.com/th/id/R.b34f99e90ad02cc3487721270b2bb1bf?rik=4dD6ubcuUo9gyA&riu=http%3a%2f%2fwww.foodworldmd.com%2ftemplates%2fdefault-new%2fimages%2fno-cart.png&ehk=ykDipIBMgzXPwV%2f3vG4O%2bkDx9m0SvfkaxhHFCBVbzTk%3d&risl=&pid=ImgRaw&r=0'></img>

       
      </div>
  );
};

export default CartList;

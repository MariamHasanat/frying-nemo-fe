import React from 'react';
import CartList from '../../components/cart.component/list/list';
import { CartContext } from '../../components/providers/cart-provider';
import { ReactComponent as Empty } from '../../assets/empty.svg';

import './cart.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const CartPage = (props) => {
  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext);
  const DeletAll = () => {
    localStorage.removeItem('cart');
    window.location.reload(false);

  };

  let totalCount = 0;
  for (let i = 0; i < cartContext.cart.length; i++) {
    totalCount += cartContext.cart[i].quantity * cartContext.cart[i].meal.price;
  }


  return (
    <>
      {
        userContext.user
          ?
          (<div className="cart-page">
            <CartList />
            <span className='total-price'> Total Price : {totalCount}</span>
            <br />
            <button className='empty-btn'
              onClick={DeletAll}
            >
              Empty Cart</button>
          </div>) :
          (<span>You Are Not Loged In , Please Sign-In to Continue !

            <Link to={'/login'}>Click Here</Link>
          </span>)
      }
    </>

  );
};

export default CartPage;
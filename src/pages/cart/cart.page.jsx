import React, { useContext, useEffect } from 'react';
import './cart.css';
import CartList from '../../components/cart/list/list.component';
import { useNavigate } from 'react-router';
import { UserContext } from '../../components/providers/user-provider';

const CartPage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (!userContext.user?.id) {
      navigate('/login', { replace: true });
    }
  });
  return (
    <div className='wrapper'>
      <h1>Cart</h1>
      <div className="body">
        <CartList />
      </div>
    </div>
  );
};

export default CartPage;

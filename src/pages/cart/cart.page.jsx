import React from 'react';
import './cart.css';
import image from '../../assets/images/image.png';

const CartPage = () => {

  return (
    <div className='wrapper'>
      <h1>Cart</h1>

      <div className="cart-item">
        <img src={image} alt="food" />

        <div className="cart-middle-section">
          <span className='item-name'>Frying Nemo</span>
          <br />
          <span className='item-price'>10.0$</span>
        </div>

        <div className="cart-right-section">
          <span className="total-item-price">
            10.0$
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

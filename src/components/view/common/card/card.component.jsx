import './card.css';
import Counter from '../counter/counter.component';
import { useContext, useState } from 'react';
import { capitalizeFirstLetter } from '../../../../services/utilities';
import { CartContext } from '../../../core/providers/cart-provider.component';

const Card = ({ item, itemId, itemName, itemCategory, itemPrice, itemDescription, itemIngredients, image, i, ctr }) => {
  const { cart, dispatch } = useContext(CartContext);

  const incCounter = () => dispatch({ type: `INCREMENT`, item });

  const decCounter = () => dispatch({ type: `DECREMENT`, item });

  const itemQuantity = cart.find(cartItem => cartItem.item.id === item.id)?.quantity || 0;

  return (
    <div className='card-wrapper' onLoad={(e) => {
      setTimeout(() => {
        e.target.offsetParent.style.opacity = 1;
      }, 50 * i);
    }}>
      <img src={image} alt="" />
      <div className='info'>
        <a href={`/view/${itemId}`} className='itemName'>{capitalizeFirstLetter(itemName)}</a>
        <p className='itemCategory'>{itemCategory}</p>
        <p className='itemDescription'>{itemDescription}</p>
        <p className='itemIngredients'>{itemIngredients}</p>
        <div className='priceInfo'>
          <p className='itemPrice'>{itemPrice}$</p>
          <Counter counter={itemQuantity} incCounter={incCounter} decCounter={decCounter} />
        </div>
      </div>
    </div>
  );
};

export default Card;
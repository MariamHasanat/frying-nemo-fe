import './card.css';
import Counter from '../counter/counter.component';
import { useContext } from 'react';
import { capitalizeFirstLetter } from '../../../../services/utilities';
import { CartContext } from '../../../core/providers/cart-provider.component';
import { useNavigate } from 'react-router-dom';

const Card = ({ item, itemId, itemName, itemCategory, itemPrice, itemDescription, itemIngredients, image, i, ctr }) => {
  console.log({ item, itemId, itemName, itemCategory, itemPrice, itemDescription, itemIngredients, image, i, ctr });
  const navigate = useNavigate();
  const { cart, dispatch } = useContext(CartContext);

  const incCounter = () => dispatch({ type: `INCREMENT`, item });

  const decCounter = () => dispatch({ type: `DECREMENT`, item });

  const itemQuantity = cart.find(cartItem => cartItem.item._id === item._id)?.quantity || 0;
  return (
    <div className='card-wrapper' onClick={() => { navigate(`${itemId}`); }}>
      <img src={image} alt="" />
      <div className='info'>
        <a className='itemName'>{capitalizeFirstLetter(itemName)}</a>
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
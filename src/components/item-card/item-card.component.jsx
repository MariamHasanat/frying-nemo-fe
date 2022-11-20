import { Link } from 'react-router-dom';
import './item-card.css';

/**
 * 
 * @param {{
 * item:{
 * id: number;
 * name: string,
 * price: number,
 * description: string,
 * category: string,
 * ingredients: string[],
 * image: string
 * };
 * }} props 
 * @returns 
 */
function ItemCard(props) {

  const handleIncrement = () => {
    props.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.item });
  };

  const handleDecrement = () => {
    props.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.item });
  };

  return (
    <div className='card-container'>
      <img src={props.item.image} alt='food' />

      <Link to={`/view/${props.item.id}`}>
        <h2>{props.item.name}</h2>
      </Link>

      <p className='item-description'>{props.item.description}</p>

      <p className='item-ingredients'>{props.item.ingredients.join(', ')}</p>
      <br />
      <hr />

      <div className='card-footer'>
        <h4 className='item-price'>{props.item.price} $</h4>
        <div className='card-buttons'>
          <button className='card-button' onClick={handleDecrement}>-</button>
          <span className='item-quantity'>{props.getItemQuantity}</span>
          <button className='card-button' onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
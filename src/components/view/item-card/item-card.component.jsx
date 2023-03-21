import { Link } from 'react-router-dom';
import PriceBar from '../../price-bar/price-bar.component';
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
 * },
 * dispatch: React.DispatchWithoutAction;
 * itemQuantity: number
 * }} props 
 * @returns 
 */
function ItemCard(props) {

  return (
    <div className='card-container'>
      <img src={props.item.imageUrl} alt='food' />

      <Link to={`/view/${props.item.id}`}>
        <h2>{props.item.name}</h2>
      </Link>

      <p className='item-description'>{props.item.description}</p>
      <p className='item-ingredients'>{props.item.ingredients.join(', ')}</p>
      <br />
      <hr />

      <PriceBar
        itemQuantity={props.itemQuantity}
        item={props.item}
      />
    </div>
  );
}

export default ItemCard;
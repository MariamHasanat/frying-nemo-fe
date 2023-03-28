import { Link } from 'react-router-dom';
import PriceBar from '../../price-bar/price-bar.component';
import './item-card.css';
import { deleteItem, editItem } from '../../../services/items';
import { PencilSimple, TrashSimple } from 'phosphor-react';

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

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    props.fetchItems();

  };

  const handleEditItem = async (id) => {
    await editItem(id);
    props.fetchItems();

  };

  return (
    <>
      {console.log('item', props.item)}
      <div className='card-container'>
        <Link to={`/view/${props.item.id}`}>
          <div className='hover-bg'></div>
        </Link>
        <img src={props.item.image} alt='food' />

        <h2>{props.item.name}</h2>

        <p className='item-description'>{props.item.description}</p>
        <p className='item-ingredients'>{props.item.ingredients.join(', ')}</p>
        <br />
        <hr />

        <button
          onClick={() => handleDeleteItem(props.item._id)}
          className='remove-sign'>
          <TrashSimple size={24} color="#00000099" />
        </button>
        <button
          onClick={() => handleEditItem(props.item._id)}
          className='edit-sign'>
          <PencilSimple size={24} color="#00000099" />
        </button>
        <PriceBar
          itemQuantity={props.itemQuantity}
          item={props.item}
        />
      </div>
    </>
  );
}

export default ItemCard;
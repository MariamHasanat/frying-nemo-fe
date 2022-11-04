import './item-card.css';

/**
 * 
 * @param {{
 * item:{
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
  return (
    <div className='card-container'>
      <img src={props.item.image} alt='food' />
      <h2>{props.item.name}</h2>
      <p className='item-description'>{props.item.description}</p>
      {/* <br /> */}
      <p className='item-ingredients'>{props.item.ingredients.join(', ')}</p>
      <br />
      <hr />
      <h4 className='item-price'>{props.item.price} $</h4>
    </div>
  );
}

export default ItemCard;
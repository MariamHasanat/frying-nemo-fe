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
      <img src={props.item.image} alt='food'/>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <br />
      <p>{props.item.ingredients.join(', ')}</p>

    </div>
  );
}

export default ItemCard;
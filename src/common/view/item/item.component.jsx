import '.././item/item.css';
import { Link } from 'react-router-dom';
import Price from '../filture/price-par/price-par';

/**
 * 
 * @param {{
 * data:{
 * id:number;
 * name: string;
 * description: string;
 * price: number;
 * image:string;
 * category: string;
 * ingredients: string[];
 * }
 * }} props 
 * 
 */

const Items = (props) => {
  return (
    <div className="item-page">
      <div className='image'>
        <img src={props.data.image}  />
      </div>
      <div className="details">
        <Link to={`/view/${props.data.id}`} ><h2>{props.data.name}</h2></Link>

        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients}</p>

      </div>
      <div className="price">
        <h3>${props.data.price}</h3>
        <Price item={props.data} dispatch={props.dispatch} cartQuantity = {props.cartQuantity} />
      </div>
    </div>
  );
};

export default Items;

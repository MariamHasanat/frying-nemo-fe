import { Link } from 'react-router-dom';
import './item.css';
import Card from '../../common/card/card.component';
import AddDeleteItem from '../../../pages/view/add-delete/add-delete.componenet';


/** 
 * Render a single menu item based on the data passed
 * @param {{
 *     data:{
 *     id: number;
 *     name: string;
 *     image: string;
 *     description: string;
 *     price: number;
 *     category: string;
 *     ingredients: string[];
 *    }
 *   }} props
 */
const Item = (props) => {
  return (
    <Card>
      <div className="img">
        <img src={props.data.image} alt="food" />
      </div>
      <div className="info">
        <Link to={`/view-details/${props.data.id}`} ><h2>{props.data.name}</h2></Link>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients.join(", ")}</p>
      </div>
      <div className="price">
        <span>${props.data.price}</span>
        <AddDeleteItem dispatch={props.dispatch} item={props.item} cartQuantity={props.cartQuantity} />
      </div>
    </Card>
  );
};

export default Item;

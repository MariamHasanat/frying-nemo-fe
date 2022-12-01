import { Link } from 'react-router-dom';
import './item.css';
import PriceBar from './priceBar/priceBar';
import Card from '../../../components/common/card/card.component';


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
        <Link to={`/view/${props.data.id}`} ><h2>{props.data.name}</h2></Link>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients.join(", ")}</p>
      </div>
      <PriceBar
        item={props.data}
        dispatch={props.dispatch}
        cartQuantity={props.cartQuantity}
      />
    </Card>
  );
};

export default Item;

import { Link } from 'react-router-dom';
import Card from '../../common/card/card.component';
import PriceBar from '../price-bar/price-bar.component';
import './item.css';


/** 
 * Render a single menu item based on the data passed
 * @param {{
 *     data:{
 *     _id: number;
 *     name: string;
 *     imageUrl: string;
 *     description: string;
 *     price: number;
 *     category: string;
 *     ingredients: string[];
 *    },
 *    dispatch: React.DispatchWithoutAction
 *   }} props
 */
const Item = (props) => {
  return (
    <Card>
      <div className="img">
        <img src={`${props.data.imageUrl}?x=${Math.random()}`} alt="food" />
      </div>
      <div className="info">
        <Link to={`/view-details/${props.data._id}`} ><h2>{props.data.name}</h2></Link>
        <p>{props.data.description}</p>
        {props.data.addedBy && <small><label>Added By: </label>{props.data.addedBy.fullName}</small>}
        <br/><br/>
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

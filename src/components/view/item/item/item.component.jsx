import './item.css'
import { Link } from 'react-router-dom';
import PriceBar from './price-bar/price-bar.cpmponent';



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
 *    },
 *    dispatch: React.DispatchWithoutAction
 *   }} props
 */

const Item = (props) => {
  
  return (
    <div className="item-card">
      <div className="img">
      
        <img src={`${props.data.image}?x=${Math.random}`} alt="food" />
      </div>
      <div className="info">
      <Link to={`/view/${props.data.id}`} ><h2>{props.data.name}</h2></Link>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients.map(ing => ing + ', ')}</p>
        <hr />
      </div>
     <PriceBar item={props.data}  dispatch={props.dispatch} />
    </div>
  );
};

export default Item;

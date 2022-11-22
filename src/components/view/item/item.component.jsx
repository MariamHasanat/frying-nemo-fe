import { Link } from 'react-router-dom';
import PriceBar from '../price-bar/price-bar.component';
import './item.css';
/**
 * Render a single menu item based on the data passed
 * @param {{
 * data:{
 *  id: number;
 *  name: string;
 *  description: string;
 *  image : string ;
 *  price: number;
 *  category: string;
 *  ingredients: string[];
 * },
 * dispatch: React.DispatchWithoutAction;
 * }} props 
 */
const Item = (props) => {


  return (
    <div className="item-card">
      <div className="img">
        <img src={props.data.image} alt="food" />
      </div>
      <div className="info">
        <Link to={`/view-details/${props.data.id}`} ><h2>{props.data.name}</h2></Link>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients.join(" , ")}</p>
        {/* instead of join you can use // map((ing, i) => ing + (i < props.data.ingredients.length - 1 ? ', ' : ' ')) */}
        <hr />
      </div>

      <PriceBar item={props.data} dispatch={props.dispatch} cartQuantity = {props.cartQuantity}/>
      

    </div>
  );
};

export default Item;

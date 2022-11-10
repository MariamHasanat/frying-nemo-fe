import { Link } from 'react-router-dom';
import Card from '../../common/card/card.component';
import './item.css';


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
        <div className="add-cart">
          <button>+</button>
          <input type="number" max={500} />
          <button>-</button>
        </div>
      </div>
    </Card>
  );
};

export default Item;

import './item.css'
import { Link } from 'react-router-dom';
/**
 * 
 * @param {{
 * data:{
 * name: string;
 * description: string;
 * price: number;
 * category: string;
 * ingredients: string[];
 * }
 * }} props 
 * @returns 
 */

const Item = (props) => {
  console.log(props);
  return (
    <div className="item-card">
      <div className="img">
      
        <img src={props.data.image} alt="food" />
      </div>
      <div className="info">
      <Link to={`/view/${props.data.id}`} ><h2>{props.data.name}</h2></Link>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients.map(ing => ing + ', ')}</p>
        <hr />
      </div>
      <div className="price">
        <span>{props.data.price}</span>
        <div className="add-cart">
          <button>+</button>
          <input type="number" max={5} />
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default Item;

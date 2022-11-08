<<<<<<< HEAD
import { Link } from 'react-router-dom';
import './item.css';
=======
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
>>>>>>> faaaeb0c0852ef2f9ceb9ef1565401db2796dff2


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
    <div className="item-card">
      <div className="img">
        <img src={props.data.image} alt="food" />
      </div>
      <div className="info">
<<<<<<< HEAD
        <Link to={`/view/${props.data.id}`} ><h2>{props.data.name}</h2></Link>
=======
      <Link to={`/view/${props.data.id}`} ><h2>{props.data.name}</h2></Link>
>>>>>>> faaaeb0c0852ef2f9ceb9ef1565401db2796dff2
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
    </div>
  );
};

export default Item;

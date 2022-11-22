import { Link } from 'react-router-dom';
import './card.css';
import Price from './price-bar';

/**
 * 
 * @param {{
 *  data {
 *      name: name;
*      description: string;
 *      price: number;
 *     categories:string;
 *     ingrediant: string[];
 *       image: string;
 * },
 *  dispatch: React.DispatchWithoutAction
 * 
 * }} props 
 *  
 */
const Card = (props) => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="imgs">
          {/* <img src="./burg.png" alt="burger" /> */}
          <img src={props.data.image} alt="food" />

        </div>
        <Link to={`/view/${props.data.id}`} ><h2>{props.data.name}</h2></Link>

        <div className="description">
          {props.data.description}
        </div>
        <div className="info-details">
          <div className="price">
            {"$" + props.data.price}
          </div>

        </div>

        <div className="description">
          {props.data.ingrediant.join(" " + "," + " ")}
        </div>
        <Price item={props.data} 
        dispatch={props.dispatch}
         cartQuantity={props.cartQuantity}/>
      </div>

    </div>
  );

};

export default Card;

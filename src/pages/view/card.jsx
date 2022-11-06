import { Link } from 'react-router-dom';
import './card.css';

/**
 * 
 * @param {{
 *  data {
 *      name: name;
*      description: string;
 *      price: number;
 *     categories:string;
 *     ingrediant: string[];
 * }
 * 
 * }} props 
 *  
 */
const Card = (props) => {
  return (
<div className="wrapper">
    <div className="card">
    <Link to={`/view/${props.data.id}`} ><h2>{props.data.name}</h2></Link>

      <div className="imgs">
        <img src="/burg.png" alt="burger" />
      </div>
      <div className="description">
        {props.data.description}
      </div>
      <div className="info-details">
        <div className="price">
          { "$"+props.data.price}
        </div>
       
      </div>
     
      <div className="description">
        {props.data.ingrediant.join( " "+ ","+" ")}
      </div>
      <div className="price">
        <div className="add-cart">
          <button>+</button>
          <input type="number" max={500} min={50} />
          <button>-</button>
        </div>
      </div>
    </div>

    </div>
  );

};

export default Card;

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
      <h2>{props.data.name} </h2>
      <div className="imgs">
        <img src="./burg.png" alt="burger" />
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
    </div>

    </div>
  );

};

export default Card;

import './menu-item.css';

/**
 * 
  * @param {{data:{
  * name:string;
  * image: string;
  * descriptions:string;
  * price:number;
  * category:sring;
  * ingredients:string[];
  * }}} props 
 * @returns 
 */

const Item = (props) => {

  return (
    <div className="item-card">
      <div className="img">
      <img src={props.data.image} alt="food" />
      </div>
      <div className="info">
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients.join(', ')}</p>

      </div>
      <div className="price">
        <span>{props.data.price}$</span>
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

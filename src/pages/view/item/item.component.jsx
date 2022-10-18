import './item.css';
/**
 * 
 * @param { 
 * {
 * name:string;
 * description:string;
 * price:number;
 * category:string;
 * ingredients:string[];
 * }} props 
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
        <p className="ingredients">{props.data.Ingredients.join(",")}</p>
        <hr />
      </div>
      <div className="price">
        <span>{props.data.price}</span>
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

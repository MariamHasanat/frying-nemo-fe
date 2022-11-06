import { Link } from "react-router-dom";
import "./item.css";
/**
 * render a single menu item based on the data
 * @param {
 * {data:{
 * name: string;
 * image: string;
 * description: string;
 * price: number;
 * category: string;
 * image:string;
 * ingredients: string[];
 * }
 * }
 * }props
 */
const Item = ({data}) => {
  console.log(data)
  return (
    <div className="item-card">
      <div className="img">
        <img src={data.image} alt="food" />
      </div>
      <div className="info">
      <Link to={`/view-details/${data.id}`} ><h2>{data.name}</h2></Link>
        <p>{data.description}</p>
        <p className="ingredients">{data.ingredients.join(",")}</p>
        <hr />
      </div>
      <div className="price">
        <span>{data.price}</span>
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

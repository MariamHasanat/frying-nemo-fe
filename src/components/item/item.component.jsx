import { Link } from "react-router-dom";
import "./item.css";
import PriceBar from "../../pages/veiw/price-bar/price-bar.component";

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
 * },
 * dispatch: React.DispatchWithoutAction
 * }props
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
        <p className="ingredients">{props.data.ingredients.join(",")}</p>
        <hr />
      </div>
      <PriceBar item={props.data} dispatch={props.dispatch} />

    </div>
  );
};

export default Item;

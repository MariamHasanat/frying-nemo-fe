import './item.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PriceBar from '../price-bar/price-bar.component';

/** 
 * Render a single menu item based on the data passed
 * @param {{
 *     data:{
 *     name: string;
 *     id: number;
 *     image: string;
 *     Description: string;
 *     Price: number;
 *     category: string;
 *     Ingredients: string[];
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
      <Link to={`/view/${props.data.id}`} ><h2>{props.data.name}</h2></Link>
        <p> desc{props.data.Description}</p>
        <p className="ingredients">{ props.data.Ingredients && props.data.Ingredients.join(",")}</p>
        {/* instead of join you can use // map((ing, i) => ing + (i < props.data.ingredients.length - 1 ? ', ' : ' ')) */}
      </div>
     <PriceBar />
    </div>
  );
};

export default Item;

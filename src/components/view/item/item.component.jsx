import { useState } from 'react';
import './item.css';
/**
 * 
 * @param {{
 * data:{
 *  name: string;
 *  description: string;
 *  image : string ;
 *  price: number;
 *  category: string;
 *  ingredients: string[];
 * }
 * }} props 
 */
const Item = (props) => {

  console.log(props);
  return (
    <div className="item-card">
      <div className="img">
        <img src={props.data.image} alt="food" />
      </div>
      <div className="info">
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients.join(" , ")}</p>
         {/* instead of join you can use // map((ing, i) => ing + (i < props.data.ingredients.length - 1 ? ', ' : ' ')) */}
        <hr />
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

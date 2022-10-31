import React from 'react';
import './card.css'

/**
 * @param {{
 *   data: {
 *   description : String ,
 *   price : number ,
 *   name : String ,
 *   ingredients : String[] ,
 *   category : String
 * }
 * }} props 
 * @returns 
 */
const Card = (props) => {
  return (
    <div className="Card">
      <div className="img">
        <img src={props.data.image} alt="food" />
      </div>
      <div className="inf">
        <h2>Name : {props.data.name}</h2>
        <p>describtion : <br/>{props.data.description}</p>
        <p className="ingredients">ingredients : {props.data.ingredients.join(", ")}</p>
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

{/* <div className="describtion">
  Your order will be ready in 20 minutes &#9201; <br/>
  &nbsp; Thanks for choosing our restaurant &#127869; <br/>
  &nbsp; You can read more about us <a href="https://www.tripadvisor.com/Restaurant_Review-g580414-d5422662-Reviews-Frying_Nemo-Goole_East_Riding_of_Yorkshire_England.html">here</a>
</div> */}
export default Card;

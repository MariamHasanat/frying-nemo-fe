import Price from '../../../common/price/Price';
import { Link } from 'react-router-dom';
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
        <Link to={`/view/${props.data.id}`}>Name : {props.data.name}</Link>
        <p>describtion : <br/>{props.data.description}</p>
        <p className="ingredients">ingredients : {props.data.ingredients.join(", ")}</p>
      </div>
       <Price item={props.data} dispatch={props.dispatch} getCartQuntity={props.getCartQuntity}/>
    </div>
  );
};


export default Card;

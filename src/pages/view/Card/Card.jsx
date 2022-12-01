import Price from '../../../common/price/Price';
import { Link } from 'react-router-dom';
import React from 'react';
import './card.css'
import { useContext } from 'react';
import { CartContext } from '../../../components/add/form/provider/CartProvider';

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

  const cartContext = useContext(CartContext);

  return (
    <div className="Card">
      <div className="img">
        <img src={`${props.data.image}?x=${Math.random()}`} alt="food" />
      </div>
      <div className="inf">
        <Link to={`/view/${props.data.id}`}>Name : {props.data.name}</Link>
        <p>describtion : <br/>{props.data.description}</p>
        <p className="ingredients">ingredients : {props.data.ingredients.join(", ")}</p>
      </div>
       <Price item={props.data} dispatch={cartContext.dispatch} getCartQuntity={props.getCartQuntity}/>
    </div>
  );
};


export default Card;

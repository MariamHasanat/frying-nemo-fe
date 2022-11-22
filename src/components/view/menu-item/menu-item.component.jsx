import React from 'react' ;
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getCartQuantity } from '../../../util/cart';
import { CartContext } from '../../providers/cart-provider.component';
import PriceBar from '../price-bar/price-bar.component';
import './menu-item.css' ;
/**
 * 
 * @param {
 * id : number;
 * name : string ;
 * price : number ;
 * discription : string ;
 * catigory : string ;
 * image : string ;
 * ingredients : string[] ;
 * } props 
 * @returns 
 */
const MenuItem = (props) => {
  const cartContext = useContext (CartContext) ;
  //const items = JSON.parse (localStorage.getItem ('menuItems') || '[]') ;
  return (
    <div className='item-card'>
      <div className='img'><img src={props.item.image} alt="" /></div>
       <h2> <Link to = {`/view-details/${props.item.id}`}>{props.item.name}</Link></h2> 
      <div className="info">
        <span>Its a : {props.item.catigory}</span>
        <p> {props.item.discription}</p>
        <p className="ingredients"> {props.item.ingredients.join(", ")}</p>
      </div>
      <PriceBar item = {props.item} dispatch = {cartContext.dispatch} cartQuantity = {getCartQuantity(props.item.id , cartContext.cart)}/>
    </div>
  )
}

export default MenuItem ;
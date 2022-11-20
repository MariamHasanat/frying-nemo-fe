import React from 'react' ;
import { Link } from 'react-router-dom';
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
      <PriceBar item = {props.item} dispatch = {props.dispatch} cartQuantity = {props.cartQuantity}/>
    </div>
  )
}

export default MenuItem ;
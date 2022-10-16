import React from 'react' ;
import './menu-item.css' ;
/**
 * 
 * @param {
 * name : string ;
 * price : number ;
 * discription : string ;
 * ingredients : string[] ;
 * } props 
 * @returns 
 */
const MenuItem = (props) => {
  //const items = JSON.parse (localStorage.getItem ('menuItems') || '[]') ;
  return (
    <div className='menuitem'>
      <span><img src={props.item.image} alt="" /></span>
      <span>Name : {props.item.name}</span>
      <span>Price : {props.item.price}</span>
      <span>Description : {props.item.discription}</span>
      <span>Its a : {props.item.catigorie}</span>
      <div>Ingredients : {props.item.ingredients.join(", ")}</div>
           
      {
        // props.value.map ((item , index) => {return(
        //   <div key={index} >
        //     </div>
        // );})
      }
    </div>
  )
}

export default MenuItem ;
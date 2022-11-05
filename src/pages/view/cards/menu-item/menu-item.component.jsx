import React from 'react' ;
import './menu-item.css' ;
/**
 * 
 * @param {
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
      <h2>Name : {props.item.name}</h2>
      <div className="info">
        <span>Its a : {props.item.catigory}</span>
        <p> {props.item.discription}</p>
        <p className="ingredients"> {props.item.ingredients.join(", ")}</p>
      </div>
      <div className='price'>
        <span >{props.item.price} $</span>
        <div className='add-cart'> 
          <button> - </button>
          <input type="number" className='ordersCount' />
          <button> + </button>
        </div>
      </div>
           
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
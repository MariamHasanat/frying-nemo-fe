import { useEffect, useState } from 'react';
import './item.css';
import{Link}from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item-card'>
      <div className='img'>
        <img src={props.data.image} alt="FOOD"/>
      </div>
      <div className='info'>
      <Link to={`/view/${props.data.id}`} ><h2>{props.data.name}</h2></Link>
         <p>{props.data.description}</p>
         <p className='ingredients'> {props.data.ingredients.join(", ")} </p>
         <hr/>
      </div>
    
      <div className='price'>
        <span>{props.data.price}$</span>
        <div className='add-cart'>
          <button>+</button>
          <input type='number' max={400}/>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};
export default Item;
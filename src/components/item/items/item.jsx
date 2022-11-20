import { useEffect, useState } from 'react';
import './item.css';
import{Link}from 'react-router-dom'
import PriceBox from '../../common/price/price';

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
    
      <PriceBox  item = {props.data}   dispatch ={props.dispatch} cartQuantity={props.cartQuantity}/>
    </div>
  );
};
export default Item;
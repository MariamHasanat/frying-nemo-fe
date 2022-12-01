import './menu-item.css';
import { Link } from 'react-router-dom';
import PriceBar from '../price-bar/price-bar.component';
import React from 'react';

/**
 * 
  * @param {{data:{
  * id: number;
  * name:string;
  * image: string;
  * descriptions:string;
  * price:number;
  * category:sring;
  * ingredients:string[];
  * },
  * dispatch:React.DispatchWithoutAction}} props 
 * @returns 
 */

const Item = (props) => {

  return (
    <div className="item-card">
      <div className="img">
        <img src={props.data.image} alt="food" />
      </div>
      <div className="info">
      <Link to={`/view-details/${props.data.id}`} ><h2>{props.data.name}</h2></Link>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients.join(', ')}</p>
      </div>
        <PriceBar
        item={props.data}
        dispatch={props.dispatch}
        cartQuantity={props.cartQuantity}
      />
    </div>
  );
};

export default Item;

import '.././item/item.css';
import { Link } from 'react-router-dom';
import Price from '../filture/price-par/price-par';
import React, { useState } from 'react';
import { PencilLine, Trash } from 'phosphor-react';
import PopupEdit from '../../update/popup.component';

/**
 * 
 * @param {{
 * data:{
 * _id:number;
 * name: string;
 * description: string;
 * price: number;
 * imageUrl:string;
 * category: string;
 * ingredients: string[];
 * cartQuantity: number;
 * }
 * }} props 
 * 
 */

const Items = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [foodForEdit, setFoodForEdit] = useState(null);

  const togglePopupEdit = () => {
    setIsEdit(!isEdit);
  };
  const handelEditFood = (food) => {
    setFoodForEdit(food);
    setIsEdit(true);
  }
  return (
    <div className="item-page">
      <div className='image'>
        <img src={`${props.data.imageUrl}?x=${Math.random()}`} alt="food" />
      </div>
      <div className="details">
        <div className='more'>
          
        <Link to={`/view/${props.data._id}`} ><h2>{props.data.name}</h2></Link> <div>
         <button className='btn' onClick={togglePopupEdit}><PencilLine size={32} /></button>
        <button className='btn' onClick={() => props.deleteItem(props.data._id)}><Trash size={32} /></button>
        </div>
        </div>
       
        {
          isEdit && <PopupEdit
            close={() => setIsEdit(false)}
            updateItem={props.updateItem}
            editedFood={foodForEdit}
            handelEditFood={handelEditFood}
          />
        }
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients}</p>

      </div>
      <div className="price">
        <h3>${props.data.price}</h3>
        <Price item={props.data} dispatch={props.dispatch} cartQuantity={props.cartQuantity} />
      </div>
    </div>
  );
};

export default Items;

import '.././item/item.css';
import { Link } from 'react-router-dom';
import Price from '../filture/price-par/price-par';
import React, { useState } from 'react';
import { PencilLine, Trash } from 'phosphor-react';
import PopupEdit from '../../update/popup.component';
import useEditItem from '../../../hook/menu/update-item.hook';

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
  const edit = useEditItem(props.data);

  const togglePopupEdit = () => {
    setIsEdit(!isEdit);
  };

  const onSave = (e) => {
    edit.update(e).then(item => {
      setIsEdit(false);
      props.refreash();
    })
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
            item={props.data}
            edit={edit}
            onSave={onSave}
          />
        }
        <p>{props.data.description}</p>
        {props.data.addedBy && <small><label>Added By: </label>{props.data.addedBy.fullName}</small>}
        <br /><br />
        <p className="ingredients">{props.data.ingredients.join(',')}</p>

      </div>
      <div className="price">
        <h3>${props.data.price}</h3>
        <Price item={props.data} dispatch={props.dispatch} cartQuantity={props.cartQuantity} />
      </div>
    </div>
  );
};

export default Items;

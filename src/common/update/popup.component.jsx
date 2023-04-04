import React from "react";
import Input from "../input/input.component";
import MultivalueInput from "../Multivalue-input/multivalue-input.component";
import './popup.css';
import Select from "../select/select.component";
import { CATEGORY } from "../../data/cons";

const PopupEdit = props => {
  return (
    <div className="popup ">
      <div className="box">
        <div className="edit">
          <h3>Update Food</h3>
          <form onSubmit={props.onSave}>
            <Input
              label="Name:"
              type="text"
              value={props.edit.name.value}
              onChange={props.edit.name.onChange}
            />
            <Input
              label="Food Image:"
              type="url"
              value={props.edit.imageUrl.value}
              onChange={props.edit.imageUrl.onChange}
            />
            <Input
              label="Description:"
              type="text"
               value={props.edit.description.value}
               onChange={props.edit.description.onChange}
            />
            <Input
              label="Price:"
              type="number"
              value={props.edit.price.value}
              onChange={props.edit.price.onChange}

            />
            <Select 
            name='category' 
            label='Category' 
            required 
            value={props.edit.category.value}
            onChange={props.edit.category.onChange}>
              
              {CATEGORY.map(item => {
                return <option key={item} value={item}>{item}</option>;
              })}
            </Select>

            <MultivalueInput
              name='ingredients'
              label="Ingredients"
              value={props.edit.ingredients.value}
              onChange={newIngredients => props.edit.ingredients.setValue(newIngredients)}
            />
            <div>
              <button className="edit-btn">Edit</button>
              <button className="edit-btn" onClick={(e) => props.close(e)}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PopupEdit;
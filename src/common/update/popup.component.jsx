import React, { useState } from "react";
import Input from "../input/input.component";
import './popup.css';

const PopupEdit = props => {
  const [foodEdit, setFoodForm] = useState(props.editedFood);
  const handleInputChange = (value, key) => {
    console.log(value);
    setFoodForm({
      ...foodEdit,
      [key]: value
    }   
);}
  const handelEditFoodSubmit = (e) => {
    e.preventDefault();    
    props.handelEditFood(foodEdit);
    props.close();
  }

  return (
    <div className="popup ">
      <div className="box">
        <div className="edit">
          <h3>Update Food</h3>
          <form onSubmit={(e) => handelEditFoodSubmit(e)}>
            <Input
              label="Name:"
              type="text"
              onChange={e => handleInputChange(e.target.value, 'name')}

            />
            <Input
              label="Food Image:"
              type="url"
              onChange={e => handleInputChange(e.target.value, 'imageUrl')}

            />
            <Input
              label="Description:"
              type="text"
              onChange={e => handleInputChange(e.target.value, 'description')}

            />
            <Input
              label="Price:"
              type="number"
              onChange={e => handleInputChange(e.target.value, 'price')}

            />
            <Input
              label="CATEGORY:"
              type="text"

            />
            <Input
              label="INGREDIENTS:"
              type="text"

            />
            <div>
              <button className="edit-btn" onClick={()=>props.updateItem(foodEdit)}>Edit</button>
              <button className="edit-btn" onClick={(e) => props.close(e)}>Cancel</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};
export default PopupEdit;
import React, { useState } from 'react';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/multivalue-input/mulitvalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import { useNavigate, useParams } from "react-router-dom";
import { CATEGORIES } from '../../../data/constants';
import './form.css';


const Form = (props) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();

    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;
    const photo = e.target.photo.value;

    const menuItem = {
      name: name,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients,
      photo: photo
    };

    const itemsJson = localStorage.getItem('menuItems') || '[]';
    const items = JSON.parse(itemsJson);

    items.push(menuItem);

    localStorage.setItem('menuItems', JSON.stringify(items))
    navigate('/view'); 

  };

  

  /**
   * Handles on change events on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */
  const onNameChange = (e) => {
    let value = e.target.value;

    if (value.includes('.')) {
      alert('. character is not allowed');
      value = value.replace('.', '');
    }

    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, 'fry');
    }

    setName(value);
  };


  return (
    <form className="addForm" onSubmit={submitHandler} >
      <Input
        label="Name"
        value={name}
        onChange={onNameChange}
        placeholder='Insert name here'
        required
      />
      <Textarea
        name="description"
        label="Description (Notes for Customers)"
        placeholder='She sells sea shells by the sea shore'
      />
      <Input
        name="price"
        label="Price"
        type="number"
        placeholder='Price'
        min={0}
        required
      />
       <Input
        name="photo"
        label="image"
        type="text"
        placeholder='Type valid image URL here'
        required
      />
      <Select name="category" label="Category" required>
        {CATEGORIES.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>
      <MultivalueInput
        label="Ingredients"
        value={ingredients}
        onChange={newIngredients => setIngredients(newIngredients)}
      />
      <div className="addFormButtons">
        <button className="btn" type="submit" onSubmit={submitHandler}>Create</button>
      </div>
    </form>
  );
};

export default Form;
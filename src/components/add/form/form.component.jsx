import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CATEGORIES from '../../../data/constant.js';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/multivalue-input/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';
import { UserContext } from '../../providers/user-provider.component.jsx';


const Form = (props) => {
  const [name, setName] = useState('Ruba');
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();

    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;
    const image = e.target.image.value;

    const menuItem = {
      id: Date.now(),
      name: name,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients,
      image : image
    };

    const itemsJson = localStorage.getItem('menuItems');
    const items = JSON.parse(itemsJson) || [];

    items.push(menuItem);

    localStorage.setItem('menuItems', JSON.stringify(items));
    navigate('View');

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
    <form className="addForm" onSubmit={submitHandler}>
      <Input
        label="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <Textarea
        name="description"
        label="Description (Add your description here. Customers will be able to read it)"
      />
      <Input
        label="img"
        name='image'
       
      
      />
      <Input
        name="price"
        label="Price"
        type="number"
        min={0}
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
        <button className="nemo-button" type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;


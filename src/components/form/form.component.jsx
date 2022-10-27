import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';
import Input from '../common/input';
import Textarea from '../textarea/textarea.component';
import Select from '../selector/selector.component';
import MultivalueInput from '../multivalue/multivalue-input';


const Form = (props) => {
 

  const [name, setName] = useState('Choose a dish');
  const [ingredients, setIngredients] = useState([]);
  let navigate = useNavigate() ;
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e event object
   */
  const submitHandler = e => {
    e.preventDefault();
    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;

    const menuItem = {
      name: name,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };
    // console.log(menuItem);
    const itemsJson = localStorage.getItem('menuItems');
    const items = JSON.parse(itemsJson) || [];

    items.push(menuItem);

    localStorage.setItem('menuItems', JSON.stringify(items));
    
    navigate('/view');

  };

  /**
   *  @type {HTMLFormElement}
   */
  const onChange = e => {
    let value = e.target.value;

    if (value.includes('.')) {
      alert('. character is not allowed');
      value = value.replace('.', '');
    }
// here i have a question 
    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, 'fry');
    }

    setName(value);
  };

  let food = [
    "tea",
    "coffee",
    "nemo",
    "abu-nemo",
    'Sandwiches',
    'Main Dish',
    'Appetizers',
    'Ice Cream'
  ];

  return (

    <form className='add-form' onSubmit={submitHandler}>

      <Input
        label="Name"
        value={name}
        onChange={onChange}
        required
      />

      <Textarea
        name='description'
        label="Description"
      />

      <Input
        name="price"
        label="Price"
        type="number"
        min={0}
        required
      />

      <Select label="Choose" required name='category'>
        {food.map
          (item => {
            return <option key={item} value={item}>{item}</option>;
          }
          )}
      </Select>

      <MultivalueInput
        label="Ingredients"
        value={ingredients}
        onChange={newIngredients => setIngredients(newIngredients)}
      />

      <div style={{ marginTop: 20 }}>
        <button type="submit" className='nemo-button'>create</button>
      </div>

    </form >
  );
};

export default Form;
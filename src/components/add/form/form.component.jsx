import React, { useState } from 'react';
import Input from '../../common/input/input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';
import MultivalueInout from '../../common/multivalue-input/multivalue-input.component';

const Form = (props) => {
  const [name, setName] = useState('Ruba');
  const [ingredients, setIngredients] = useState([]);

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();

    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const category = e.target.category;
    const menuItem = {
      name: name,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };

    const itemsJson = localStorage.getItem('menueItems') || '[]'
    const items = Json.stringify(itemsJson)
    localStorage.setItem('menuItem' ,JSON.stringify(items));
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

  const categories = [
    'Fish',
    'Drinks',
    'Hookah',
    'Salads',
    'Sandwiches',
    'Main Dish',
    'Appetizers',
    'Ice Cream'
  ];

  return (
    <form className="addForm" onSubmit={submitHandler} >
      <Input
        name='name'
        label="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <Textarea
        label="Description"
        name='description'
      />
      <Input
        label="Price"
        type="number"
        min={0}
        required
        name='price'
      />
      <Select label="Category" required name='category'>
        {
          categories.map(item => {
            return <option key={item} value={item}>{item}</option>;

          })}
      </Select>

      <MultivalueInout
        name='ingredients'
        label="INGRADIANTS"
        value={
          ingredients
        }
        onChange={e => setIngredients(e)}
      />
      <div className="addFormButtons">
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;

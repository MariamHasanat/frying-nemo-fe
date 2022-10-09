import React, { useState } from 'react';
import './form.css';
import Input from '../../common/input/input.component';
import Textarea from '../../common/textarea/textarea.component';
import Select from '../../common/select/select.component';
import MultivalueInput from '../../common/multivalue-input/multivalue-input.component';

const Form = (props) => {

  const [name, setName] = useState('abd');
  const [ingredients, setNewIngredients] = useState([]);

  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const submitHandler = e => {
    e.preventDefault();
    const description = e.target.description.value;
    const category = e.target.category.value;
    const price = Number(e.target.price.value);

    const menuItem = {
      name: name,
      price: price,
      description: description,
      category: category,
      ingredients: ingredients,
    };

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    console.log("menu item: " , menuItem);
  };

  const categories = ["Fish", "Drinks", "Main Dishes", "Salads",];
  return (
    <form onSubmit={submitHandler} className='add-item-form'>

      <div>
        <div style={{ textAlign: 'right' }}>
          <button type='submit'>Add Item</button>
        </div>

        <Input
          label='name'
          name='name'
          onChange={onNameChange}
          required
        />
        <Input
          label='Price'
          name='price'
          required
        />

        <Textarea
          name='description'
          label='description'
        />

        <Select
          name='category'
          label='menu'
          options={categories}
        />

        <MultivalueInput
          label='ingredients'
          value={ingredients}
          onChange={newIngredients => setNewIngredients(newIngredients)}
        />

      </div>
    </form>
  );

  function onNameChange(e) {
    let value = e.target.value;
    if (value === 'find') {
      value = 'fry';
    }
    setName(value);
  }
};

export default Form;
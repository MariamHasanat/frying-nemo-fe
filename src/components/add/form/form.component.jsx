import React, { useState } from 'react';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/multivalueinput/multi-value-input';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';


const Form = (props) => {
  const [name, setName] = useState('yara');
  const [ingredients, setIngredients] = useState([]);

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();

    const menuItem = {
      name: name
    };

    console.debug('Form submitted', menuItem);
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
        label="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <Textarea
        label="Description"
      />
      <Input
        label="Price"
        type="number"
        min={0}
        required
      />
      <Select label="Category" required>
        {categories.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>



      <div className="addFormButtons">

        <button class="button-56" type="submit">Create</button>
      </div>

    </form>
  );
};

export default Form;
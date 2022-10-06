import React, { useState } from 'react';
import './form.css';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/mutivalue-input/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';


const Form = (props) => {
  const [name, setName] = useState('Lana');
  const [ingredients, setIngredients] = useState([]);
  /**
   * Handler fn for the form onSubmit event .
   * @param {React.FormEvent<HTMLFormElement>}e Event object.
   */


  const submitHandler = e => {
    e.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    console.debug(target.ATTRIBUTE_NODE);
  };

  /**
   * Handles on change event on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e on change event object . 
   */
  const onNameChange = (e) => {

    let value = e.target.value;

    if (value.includes('.')) {

      alert('. character is not allowed !');
      value = value.replace('.', ' ');
    }

    if (/find/ig.test(value)) {

      alert('find word is not allowed !');
      value = value.replace('/find/ig', 'fry ');
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
    <form className="add-form" onSubmit={submitHandler}>
      <div style={{ marginTop: 20 }}>

        <Input
          label="Name"
          value={name}
          onChange={onNameChange}
          required
        />

        <Textarea
          label=" Description"
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

        <MultivalueInput
          label="Ingredients"
          value={ingredients}
          onChange={newIngredients => setIngredients(newIngredients)}
        />
                  
          <div><button type="submit">Create </button></div>


        </div>

    </form >
  );
};

export default Form;
import React, { useState } from 'react';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/multivalueinput/multi-value-input';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';


const Form = (props) => {
  const [name, setName] = useState('yara');
  const [Ingredients, setIngredients] = useState([]);

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();
    const Price = e.target.Price.value;
    const Description =Number( e.target.Description.value);
    const category = e.target.category.value;

    const menuItem = {
      name,
      Description,
      Price,
      category,
      Ingredients

    };
    const itemsJason =localStorage.getItem('MenuItems') || '[]';
    const items =JSON.parse(itemsJason);
    items.push(menuItem)
    localStorage.setItem('MenuItems',JSON.stringify(items));
    props.onNavigate('view');

 
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
        name='Description'
      />
      <Input
        label="Price"
        name='Price'
        type="number"
        min={0}
        required
      />
      <Select
        label="Category"
        name='category'
        required>
        {categories.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>

      <MultivalueInput
        label="Ingredients"
        name="Ingredients"
        value={Ingredients}
        onChange={newIngredients => setIngredients(newIngredients)}
      />

      <div className="addFormButtons">

        <button className="button-56" type="submit">Create</button>

      </div>

    </form>
  );
};

export default Form;
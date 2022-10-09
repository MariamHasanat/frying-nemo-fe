import { useState } from 'react';
import './form.css';
import Input from '../../../common/input/input.component';
import Textarea from '../../../common/textarea/textarea.component';
import Select from '../../../common/select/select.component';
import MultivalueInput from '../../../common/Multivalue-input/multivalue-input.component';

const Form = (props) => {
  const [name, setName] = useState('Nadeen');
  const [ingredients, setIngredients] = useState([]);
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const SubmitHandel = e => {
    e.preventDefault();

    const description = e.target.description.value;
    const price = e.target.price.value;
    const category = e.target.category.value;

    const menuItem = {
      name: name,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };
 const itemJson = localStorage.getItem('menuItem');


console.debug(menuItem);

  };
  /**
   * Handles on change events on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */

  const onNameChange = e => {
    let value = e.target.value;

    if (value.includes('find')) {
      value = value.replace(/find/ig, 'fry');
    }
    setName(value);

  };
  const categories = [
    "Fish",
    "Drink",
    "Salade",
    "Sandwiches",
    "Ice Cream",
  ];
  return (
    <form className='add-form' onSubmit={SubmitHandel}>
      <Input
        label="Name"
        name='name'
        placeholder='name'
        value={name}
        onChange={onNameChange}
        required
      />
      <Textarea
        name='description'
        label="Description"
      />
      <Input
        type='number'
        name='price'
        label='price'
        min={0}
        required
      />
      <Select name='category' label='Category' required>
        {categories.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>

      <MultivalueInput
        name='ingredients'
        label="Ingredients"
        value={ingredients}
        onChange={newIngredients => setIngredients(newIngredients)}
      />

      <div>
        <button type='submit' className='submit'>Create</button>
      </div>
    </form>
  );
};

export default Form;
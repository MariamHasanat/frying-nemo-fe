
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/multivalueinput/multi-value-input';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';
import { CATEGORIES } from '../../../data/constant';
import UserContext from '../../providers/user-provider.component';
const Form = (props) => {
  const [name, setName] = useState('yara');
  const [Ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();
    const image = e.target.image.value;
    const Price = Number(e.target.Price.value);
    const Description = e.target.Description.value;
    const category = e.target.category.value;

    const menuItem = {
      id: Date.now(),
      name,
      Description,
      image,
      Price,
      category,
      Ingredients

    };
    const itemsJason = localStorage.getItem('menuItems') || '[]';
    const items = JSON.parse(itemsJason);
    items.push(menuItem);
    localStorage.setItem('menuItems', JSON.stringify(items));
    navigate('/view');
    console.log('form Submitted')

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
        required
      />
      <Textarea
        label="Description"
        name='Description'
      />
      <Input
        label="Image"
        name="image"

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
        {CATEGORIES.map(item => {
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
        <button
          className="nemo-button"
          type="submit"
          disabled={userContext.user?.role !== 'ADMIN'}
        >
          Create
        </button>

      </div>

    </form>
  );
};

export default Form;
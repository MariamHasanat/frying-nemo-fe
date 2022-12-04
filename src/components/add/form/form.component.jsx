import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../../data/data';
import './form.css';

import { UserContext } from '../../provider/user-provider.component';
import { createItem } from '../../../services/item';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/multivalue-input/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';

const Form = (props) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = async e => {
    e.preventDefault();

    const description = e.target.description.value;
    const image = e.target.image.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;

    const menuItem = {
      id: Date.now(),
      name: name,
      image,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };

    const res = await createItem(menuItem);
    if (res) {
      navigate('/view');
      alert('added succsefully');
    }
    else {
      alert('error adding');
    }

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
        label="Image"
        name="image"
        required
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

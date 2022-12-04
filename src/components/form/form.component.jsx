import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';
import Input from '../common/input';
import Textarea from '../textarea/textarea.component';
import Select from '../selector/selector.component';
import MultivalueInput from '../multivalue/multivalue-input';
import { CATEGORIES } from '../data/categories';

import { UserContext } from '../providers/user-provider';
import { createItem } from '../../services/items';

const Form = (props) => {

  const userContext = useContext(UserContext);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  let navigate = useNavigate();
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e event object
   */
  const submitHandler = async e => {
    e.preventDefault();
    // const name = e.target.name.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;
    // const ingredients = e.target.ingredients.value;

    const menuItem = {
      id: Date.now(),
      name: name,
      image,
      description: description,
      price: price,
      category: category,
      ingredients: ingredients
    };
    // console.log(menuItem);
    const res = await createItem(menuItem);
    if (res) {
      alert("Items added successfully");
      navigate('/view');
    } else {
      alert("error adding the item");
    }


    // const itemsJson = localStorage.getItem('menuItems');
    // const items = JSON.parse(itemsJson) || [];

    // items.push(menuItem);

    // localStorage.setItem('menuItems', JSON.stringify(items));


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

      <Select label="Choose" required name='category'>
        {CATEGORIES.map
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
      <div className="addFormButtons">
        <button
          className="nemo-button"
          type="submit"
          disabled={userContext.user?.role !== 'ADMIN'}
        >
          Create
        </button>
      </div>

    </form >
  );
};

export default Form;
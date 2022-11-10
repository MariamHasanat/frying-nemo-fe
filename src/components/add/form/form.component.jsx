import './form.css';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../../data/constants';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/mutivalue-input/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import { UserContext } from '../../../App';



const Form = (props) => {
  const [name, setName] = useState('Lana');
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  /**
   * Handler fn for the form onSubmit event .
   * @param {React.FormEvent<HTMLFormElement>}e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();


    const description = e.target.description.value;
    const image = e.target.image.value;
    const price = Number(e.target.price.value);
    const category = e.target.category.value;


    const menuItem = {
      id: Date.now(),
      name: name,
      description: description,
      image,
      price: price,
      category: category,
      ingredients: ingredients
    };

    // console.debug('Form submitted', menuItem);
    const itemsJson = localStorage.getItem('menuItems') || '[]';
    const items = JSON.parse(itemsJson);

    items.push(menuItem);
    localStorage.setItem('menuItem', JSON.stringify(items));
    props.onNavigate('view');
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
          name='description'
          label=" Description"
        />

        <Input
          name='image'
          label="Image"
          required
        />

        <Input
          name='price'
          label="Price"
          type="number"
          min={0}
          required
        />


        <Select name='category' label="Category" required>
          {CATEGORIES.map(item => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </Select>

        <MultivalueInput
          label="Ingredients"
          value={ingredients}
          onChange={newIngredients => setIngredients(newIngredients)}
        />

        <div><button type="submit" disabled={userContext.user?.role !== 'ADMIN'}>Create </button></div>


      </div>

    </form >
  );
};

export default Form;
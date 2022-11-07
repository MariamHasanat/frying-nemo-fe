import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '../../common/input/input.component';
import MultivalueInput from '../../common/multivalue-input/multivalue-input/multivalue-input.component';
import Select from '../../common/select/select.component';
import Textarea from '../../common/textarea/textarea.component';
import './form.css';
import CATEGORIES from '../../../data/constants' ;
import { isDisabled } from '@testing-library/user-event/dist/utils';

const Form = (props) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate() ;
  /*
   * calls JSDoc
   * @param {React.ChangeEvent<HTMLInputElement>} e   //Event object
   */
  const handle = e => {
    e.preventDefault();
    console.debug(name);
    console.log('Form Submitted');
    const price = e.target.price.value;
    const discription = e.target.discription.value;
    const catigory = e.target.catigory.value;
    const image = e.target.image.value;
    const menueItem = {
      id : Date.now(),
      name: name,
      price: price,
      discription: discription,
      catigory: catigory,
      ingredients: ingredients,
      image: image
    };
    const itemsJson = localStorage.getItem('menuItems') || '[]';
    const items = JSON.parse(itemsJson);
    console.log("before", items);
    items.push(menueItem);
    console.log("after", items);
    localStorage.setItem('menuItems', JSON.stringify(items));
    props.onAdd(menueItem);
    navigate ('/view') ;   // to change url without link , without needing to render it as a link component
  };
  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const nameChange = e => {
    let val = e.target.value;
    if (/find/ig.test(val)) {
      alert('find not allowed to be included in the input !');
      val = val.replace(/find/ig, 'fry');
      console.log(val);
    }
    if (val.length > 20) {

      alert('character limit exceeded');
      val = val.substring(0, 20);
    }
    setName(val);
  };
  // const CATEGORIES = ["Salads", "Main Dishes", "Drinks", "Sweets"];
  return (
    <form className='addForm' onSubmit={handle} action='/view'>
      <Input
        className='input-group'
        label="Name"
        value={name}
        required
        onChange={nameChange}
      />
      <Textarea
        name='discription'
        label="Discription"
        className='textarea-group'
      />
      <Input label='Enter image link' type="text" name="image" />
      <Input
        className='input-group'
        type="number"
        label="Price"
        name='price'
        required
        min={0}
      />
      {/* using array mapping */}
      <Select label='Select' name='catigory'>
        {CATEGORIES.map(item =>
          <option key={item} value={item}>{item}</option>
        )}
        {/* key must be mintions */}
      </Select>
      <MultivalueInput
        label='Ingredients' name='ingredients'
        onChange={item => setIngredients(item)}
        value={ingredients}
      />
      <div className='addFormButtons'>
        <button
          type='submit'
          className='formComp nemo-button'
          disabled = {props.user?.role !== 'ADMIN'}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;

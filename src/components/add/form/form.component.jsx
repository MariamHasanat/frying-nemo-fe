import React, { useState } from 'react';
import Input from '../../common/input/input';
import MySelect from '../../common/select/select';
import Textarea from '../../common/textarea/textarea/Tarea';
import MultivalueInput from '../../common/multi-value-input/multi-value-input';
import './form.css';
import { useNavigate } from 'react-router-dom';
import {CATEGORIES } from '../../../data/data';



const Form = (props) => {
  const [name, setName] = useState('ayat');
  const [ingrediant, setIngrediant] = useState([]);
  const navigate = useNavigate();



  /**
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */

  const submitHandeller = (e) => {
    e.preventDefault();
    /*
     * @type {HTMLFormElement} 
    */

    const description = e.target.description.value;
    const price = Number(e.target.price.value);
    const categories = e.target.categories.value;

    const menuItem = {
      name: name,
      description: description,
      price: price,
      categories: categories,
      ingrediant: ingrediant

    };

    const itemsJson = localStorage.getItem('menuitems');

    const items = JSON.parse(itemsJson) || [];

    items.push(menuItem);

    localStorage.setItem('menuitems', JSON.stringify(items));
    console.table('menuitems', items);
    navigate('/view');


    ///to store complex object on local storage we need to convert it to json file using JSON.stringify (string representation )
    // use JSON.pars  convert JSON string   -> js object 



  };


  // const categories = [
  //   'Fish',
  //   'Drinks',
  //   'Hookah',
  //   'Salads',
  //   'Sandwiches',
  //   'Main Dish',
  //   'Appetizers',
  //   'Ice Cream'
  // ];
  const onNameChange = e => {
    let value = e.target.value;
    if (value.includes('.')) {
      alert("not allow char ");
    }

    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, 'fry');
    }
    setName(value);
    console.log('hi');

  };


  return (
    <form onSubmit={submitHandeller} >

      <h1>Add to the menu !</h1>
      <Input
        label="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <Textarea
        label="Decription"
        name='description'
      />

      <MySelect
        name="categories"
        label='categories' required>
        {
          CATEGORIES.map(item => {

            return <option value={item} key={item}>{item}</option>;
          })
        }
      </MySelect>

      <Input
        name="price"
        label="Price"
        type="number"
        min={0}
        required
      />
      <MultivalueInput
        label="Ingradiant"
        value={ingrediant}
        onChange={newI => setIngrediant(newI)}

      />

      <div className='btn'>
        <button type='submit' className='submit-button' >create</button>
      </div>
    </form>
  );
};

export default Form;
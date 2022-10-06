import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import Input from '../../common/input/input';
import MultivalueInput from '../../common/multi-value-input/multi-value-input';
import MySelect from '../../common/select/select';
import Textarea from '../../common/textarea/textarea/Tarea';
import './form.css';
const Form = (props) => {
  const [name, setName] = useState('ayat');

  /** 
   * handle change event.
  * @parm {React.ChangeEvent<HTMLInputElement> } e  on change event
  * 
  *
  */


  
  const submitHandeller = (e) => {
    e.preventDefault();
    /*
     * @type {HTMLFormElement} 
    */

    const target = e.target;
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
    <form onSubmit={submitHandeller}>

      <h1>Add to the menu !</h1>
      <Input
        label="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <Textarea
        label="Decription"

      />

      <MySelect
        label='categories' required>
        {
          categories.map(item => {

            return <option value={item} key={item}>{item}</option>;
          })
        }
      </MySelect>
<MultivalueInput
label='Ingrediant'  
value ={['suger','cream'] }                                       
/>

      <div className='btn'>
        <button type='submit' className='submit-button'>create</button>
      </div>
    </form>
  );
};

export default Form;
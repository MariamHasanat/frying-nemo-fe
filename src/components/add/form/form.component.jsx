import React, { useState } from 'react';
import './form.css';
import 'bootstrap/dist/css/bootstrap.css';
import Input from '../../common/input/input.componen';

const Form = (props) => {

  const [name, setName] = useState('abd');
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const submitHandler = e => {
    e.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    console.log(target);
  };


  return (
    <form onSubmit={submitHandler} className='add-item-form'>
      {/* <input type="text"
        name="item-name"
        onChange={
          e => {
            // setName(e.target.value);
            let value = e.target.value;
            if (value === 'find') {
              value = 'fry';
            }
            setName(value);
          }}
        value={name} /> */}
      <Input
        label='name'
        onChange={
          e => {
            // setName(e.target.value);
            let value = e.target.value;
            if (value === 'find') {
              value = 'fry';
            }
            setName(value);
          }} />

      <div>
        <button type='submit'>Add Item</button>
      </div>
    </form>
  );
};

export default Form;
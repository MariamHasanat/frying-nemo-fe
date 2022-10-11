import React, { useState } from 'react';
import './form.css';
import Input from '../common/input';
import Textarea from '../textarea/textarea.component';
import Select from '../selector/selector.component';


const Form = (props) => {
  const [name, setName] = useState('Israa');

  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e event object
   */
  const submitHandler = e => {
    e.preventDefault();
    const target = e.target;
  };

  /**
   *  @type {HTMLFormElement}
   */
  const onChange = e => {
    let value = e.target.value;
    if (value.includes('find')) {
      // alert('find');
      value = value.replace('find', 'fry');
    }
    setName(value);
  };

  let orders = [
    "tea",
    "coffee",
    "nemo",
    "abu-nemo",
  ];

  return (

    <form className='add-form' onSubmit={submitHandler}>

      <Input
        label="Name"
        value={name}
        onChange={onChange}
        required
      />

      <Textarea
        label="Description"
      />

      <Select label="Choose" required>
        {orders.map
          (item => {
            return <option key={item} value={item}>{item}</option>;
          }
          )}
      </Select>

      <div style={{ marginTop: 20 }}>
        <button type="submit" className='nemo-button'>create</button>
      </div>

    </form>
  );
};

export default Form;
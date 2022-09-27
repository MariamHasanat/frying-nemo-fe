import React, { useState } from 'react';
import './form.css';

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
    <form onSubmit={submitHandler}>
      <input type="text" name="item-name" onChange={e => setName(e.target.value)} value={name} />
      <button type='submit'>Add Item</button>
    </form>
  );
};

export default Form;
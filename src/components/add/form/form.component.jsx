import React, { useState } from 'react';
import './form.css';
import  Input from '../../common/input';
const Form = (props) => {
  const [name, setName] = useState('mariam');

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
      alert('find');
      value = value.replace('find', 'fry');
    }
    setName(value);
  };


  return (
    <form className='add-form' onSubmit={submitHandler}>

      <Input
        label="Name"
        value={name}
        onChange={onChange}
      />
      <div style={{ marginTop: 20 }}>
        <button type="submit">creat</button>

      </div>

    </form>
  );
};

export default Form;
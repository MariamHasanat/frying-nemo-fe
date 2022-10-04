import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import Input from '../../common/input/input';
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


  // <input type="text"
  //   name="name"
  //   placeholder='Name'
  //   value={name}

  // />

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
      <div>

        <Input
          label="Name"
          value={name}
          onChange={onNameChange}
          required
        />
<Textarea
label="Decription"
/>

      </div>

      <button type='submit'>create</button>
    </form>
  );
};

export default Form;
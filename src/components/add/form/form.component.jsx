import React, { useState } from 'react';
import Input from '../../common/input/input.component';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState('Qusai');

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();

    const menuItem = {
      name: name
    };

    console.debug('Form submitted', menuItem);
  };

  /**
   * Handles on change events on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e On change event object.
   */
  const onNameChange = (e) => {
    let value = e.target.value;

    if (value.includes('.')) {
      alert('. character is not allowed');
      value = value.replace('.', '');
    }

    if (/find/ig.test(value)) {
      value = value.replace(/find/ig, 'fry');
    }

    setName(value);
  };

  return (
    <form className="addForm" onSubmit={submitHandler} >
      <Input
        label="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <div className="addFormButtons">
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;
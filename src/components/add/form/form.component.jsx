import React, { useState } from 'react';
import './form.css';
import Input from '../../common/input/input.component';
import Textarea from '../../common/textarea/textarea.component';
import Select from '../../common/select/select.component';

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

  const categories = ["Fish", "Drinks", "Main Dishes", "Salads"];

  return (
    <form onSubmit={submitHandler} className='add-item-form'>

      <div>

        <Input
          label='name'
          onChange={onNameChange}
          required
        />

        <Textarea
          label='description'
        />

        <Select
          label='menu'
          options={categories}
        />


        <div>
          <button type='submit'>Add Item</button>
        </div>
      </div>
    </form>
  );

  function onNameChange(e) {
    let value = e.target.value;
    if (value === 'find') {
      value = 'fry';
    }
    setName(value);
  }
};

export default Form;
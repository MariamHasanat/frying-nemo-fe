import React, { useState } from 'react';
import './form.css';
import Input from '../common/input';
import Textarea from '../textarea/textarea.component';
import Select from '../selector/selector.component';
import MultivalueInput from '../multivalue/multivalue-input';

const Form = (props) => {

  const [name, setName] = useState('mariam');
  const [ingredients, setIngredients] = useState([]);



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

  let food = [
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
        {food.map
          (item => {
            return <option key={item} value={item}>{item}</option>;
          }
          )}
      </Select>

      <MultivalueInput
        label="Ingredients"
        value={ingredients}
        onChange={newIngredients => setIngredients(newIngredients)}
      />
        
      <div style={{ marginTop: 20 }}>
        <button type="submit" className='nemo-button'>create</button>

      </div>

    </form>
  );
};

export default Form;
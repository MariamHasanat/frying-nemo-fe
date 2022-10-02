import { useState } from 'react';
import Input from '../../../input/input.component';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState('Huda');

  /**
   * Handler function for the form onSubmit event.
   * @param {React.FormEvent<HTMLFormElement>} e Event object.
   */
  const submitHandler = e => {
    e.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    console.debug(target.ATTRIBUTE_NODE);
  };
  
  const onNameChange = e => {
    let value =e.target.value;
    if (value.includes('find')){
      value =value.replace('find','fry');
    }
    setName(value);
  }

  return (
    <form className="add-form" onSubmit={submitHandler} >
      <div style={{ marginTop: 20 }}>
      <Input
        label="name"
        value={name}
        onChange={onNameChange}
      />
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;

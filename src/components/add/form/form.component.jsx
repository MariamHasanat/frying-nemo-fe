import { useState } from 'react';
import Input from './common/input/input';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState('Qusai');

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
    let value = e.target.value;
    if (value.includes('.')) {
      alert("points is not allowed !!");
      value = value.replace(".", "");


    }

    if (value.includes('find')) {

      value = value.replace(/find/, 'fry');
    }

    setName(value);
  };
  return (
    <form className="add-form" onSubmit={submitHandler} >

      <Input
        label="name"
        value={name}
        onChange={onNameChange
        }
      />
      <div style={{ marginTop: 20 }}>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;
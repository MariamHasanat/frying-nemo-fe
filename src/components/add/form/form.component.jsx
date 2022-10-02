import './form.css';
import { useState } from 'react';
import Input from '../../common/input.component';

const Form = (props) => {
  const [name, setName] = useState('Lana');

  /**
   * Handler fn for the form onSubmit event .
   * @param {React.FormEvent<HTMLFormElement>}e Event object.
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

      alert('. character is not allowed !');
      value = value.replace('.', ' ');
    }

    if (/find/ig.test(value)) {

      alert('find word is not allowed !');
      value = value.replace('/find/ig', 'fry ');
    }

    setName(value);
  }

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <div style={{ marginTop: 20 }}>

        <Input
          label="Name"
          value={name}
          onChange={onNameChange}
        />


        <button type="submit">Create </button>
      </div>

    </form>
  );
};

export default Form;
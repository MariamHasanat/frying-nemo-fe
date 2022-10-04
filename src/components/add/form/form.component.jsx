import './form.css';
import { useState } from 'react';
import Input from '../../common/input/input.component';
import Textarea from '../../common/textarea/textarea.component';

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

  /**
   * Handels on change event on the name field.
   * @param {React.ChangeEvent<HTMLInputElement>} e on change event object . 
   */
  const onNameChange = (e) => {

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
  };

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <div style={{ marginTop: 20 }}>

        <Input
          label="Name"
          value={name}
          onChange={onNameChange}
          required
        />

        <Textarea
          label=" Description"
        />

        <Input
          label="Price"
          type="number"
          min={0}
          required
        />

        <select>
          <option>Fish</option>
          <option>Drinks</option>
          <option>Hookah</option>
          <option>salads</option>
          <option>Sandwiches</option>
          <option>Main dish</option>
          <option>Appetizers</option>
          <option>Ice creem</option>
        </select>
        <div><button type="submit">Create </button></div>

      </div>

    </form >
  );
};

export default Form;
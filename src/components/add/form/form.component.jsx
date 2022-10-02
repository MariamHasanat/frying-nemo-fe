import { useState } from 'react';
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

  const onNameChange = e => {
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
    <form className="add-form" onSubmit={submitHandler} >
      <div style={{ marginTop: 20 }}>
        <Input
          label="Name"
          value={name}
          onChange={onNameChange}
        />
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default Form;
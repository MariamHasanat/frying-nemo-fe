import { useState } from 'react';
import Input from '../../common/input/input-component';
import './form.css';

const Form = (props) => {

  const [name, setName] = useState("Asia");
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e Event Object. 
   */
  const submitHandler = e => {
    e.preventDefault();

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    console.debug(target);
  };

  const onNameChange = e => {
    let value = e.target.value;
    if (value.length > 20) {
      alert("Noooooooo Please !!!!! toooo much");
      value = value.substring(0, 20);
    }
    if (value.includes("find")) {
      value = value.replace("find", "fry");
    }
    setName(value);
  };
  return (
    <form className='add-form' onSubmit={submitHandler}>
      <div style={{ marginTop: 20 }}>
        <Input
          label="Name"
          value={name}
          onChange={onNameChange}
        />
        <button type='submit'>Create</button>
      </div>
    </form>
  );
};

export default Form;
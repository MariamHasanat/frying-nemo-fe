import { useState } from 'react';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState('');

  /**
   * Form Submit Handler 
   * @param e{React.ChangeEvent<HTMLInputElement>} event
   */
  const submitHandler = (e) => {
    e.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    const target = e.target;
    //  console.log(e.target.uName.value);
    console.log(target.Name.value);
  };

  return (
    <form onSubmit={submitHandler} className="styled-form">
      <input
        type="text"
        name="Name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div>
        <button type='submit'>Create</button>
      </div>
    </form>
  );
};

export default Form;
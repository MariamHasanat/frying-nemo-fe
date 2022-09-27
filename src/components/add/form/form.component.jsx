import { useState } from 'react';
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
  return (
    <form className='add-form' onSubmit={submitHandler}>
      <input
        type="text"
        name='name'
        placeholder='Name'
        value={name}
        onChange={e => setName(e.target.value)} />
      <div style={{ marginTop: 20 }}>
        <button type='submit'>Create</button>
      </div>
    </form>
  );
};

export default Form;
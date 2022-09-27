import './form.css';
import { useState } from 'react';

const Form = (props) => {
  const [name,setName] = useState('Huda');
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
    console.debug(target);
  };

  return (
    <form className='add-form' onSubmit={submitHandler()}>
      <input
        type="text"
        name='name'
        placeholder='Name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div style={{ marginTop: 20 }}>
        <button type='submit'>Create</button>
      </div>
    </form>
  );
};

export default Form;
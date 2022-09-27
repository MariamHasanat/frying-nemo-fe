import { useState } from 'react';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState(`Omar`)
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const submitHandler = e => {
    e.preventDefault();
    console.debug(e.target.name.value)
  }


  const chnageName = (value) => {
    setName(value.target.value)
  }

  return (
    <form className='add-form' onSubmit={submitHandler}>
      <input type="text" name='name' placeholder='Name' value={name} onChange={e => {
        chnageName(e)
      }}/>
      <div>
        <button type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;
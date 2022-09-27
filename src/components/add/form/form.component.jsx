import { useState } from 'react';
import './form.css';

const Form = (props) => {
  const [name , setName] = useState('');
  const handler = e => {
   e.preventDefault();
    /**
     * @type {HTMLformElement}
     */
    const target = e.target;
    console.debug(target);
  }
  return (
    <form onSubmit={handler}>
      <input 
      type="text" 
      value={name}
      placeholder="name"
      onChange={e => setName(e.target.value)}
      />
      <div style={{ margintop : 20 }}>
        <button type='submit'>Creat</button>
        </div>
    </form>
  );
};

export default Form;
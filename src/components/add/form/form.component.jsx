import { useState } from 'react';
import './form.css';
const Form = (props) => {
  const [name, setName] = useState('Abdullah');
  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const submitHandler = e=>{
    e.preventDefault();
    /**
     * @type {HtmlFormElement}
     */
    const target = e.target;
  }
  return (
    <form>
      <input
        type='text'
        name='name'
        placeholder='name'
        onChange={e=> setName(e.target.value)}
      />
      <div style={{marginTop: 20}}>
        <button type='submit'>Create</button>
      </div>
    </form>
  );
};

export default Form;
import { useState } from 'react';
import './form.css';

const Form = (props) => {
  const[name,setName]=useState('Nadeen');
  /**
   * 
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const SubmitHandel=e=>{
    e.preventDefult();
/**
 * @type {HtmlFormElement}
 */
    const target = e.target;

  }
  return (
    <form className='add-form' onSubmit={SubmitHandel}>
       <input type="text"
        placeholder='Name'
        value={name}
        name='name'
       onChange={e=>setName(e.target
        .value)}
       /> 
       <div>
        <button type='submit'>Create</button>
       </div>
       </form>
  );
};

export default Form;
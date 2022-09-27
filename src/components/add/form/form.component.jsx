import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import './form.css';

const Form = (props) => {
const [name, setName]=useState('ayat');

/** 
* @parm {React.ChangeEvent<HTMLInputElement>} e event object.

*/
const submitHandeller=(e)=>{
  e.preventDefault();
/*
 * @type {HTMLFormElement} 
*/

  const target = e.target;
}

  return (
    <form onSubmit={submitHandeller}>
<input type="text"
 name="name"
 placeholder='Name'
 value={name}
 onChange={e => setName(e.target.value)}
  />   
  
  <button type='submit'>create</button>
   </form>
  );
};

export default Form;
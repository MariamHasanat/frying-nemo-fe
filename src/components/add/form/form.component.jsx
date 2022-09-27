import React, { useState } from 'react';
import './form.css';

const Form = (props) => {
  const [name,setName]=useState('mariam');

/**
 * 
 * @param {React.FormEvent<HTMLFormElement>} e event object
 */

const submitHandler= e  =>{
  e.preventDefault();
}
/**
 *  @type {HTMLFormElement}
 */
const target =e.target;


return (
    <form className='add-form' onSubmit={submitHandler}>
    <input type='text'
    name= "name"
    placeholder='name'
    value={name}
    onChange={e =>setName( e.target.value)}
    />
      <div style ={{ marginTop:20}}>
        <button type="submit">creat</button>
    
      </div>
 
    </form>
  );
};

export default Form;
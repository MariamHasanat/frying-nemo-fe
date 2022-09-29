import { useState } from 'react';
import './form.css';
const Form =(props)=>{
 
  const handleSubmit=(e)=>{
    e.preventDefult();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.passward.value);
  }
return(
  <form className='form' onSubmit={handleSubmit}>
    <div className='input'>
      <input
       type="text" name="name" placeholder='Sajeda'
       ></input>
      <input 
      type="email" name="email" placeholder='sajeda@example.com'
      ></input>
      <input type="password" name="passward" placeholder='.......'  outoComplete='true'></input>

   </div>
    <input  className='submit' type='submit' value='SignUp'></input>
  </form>
);
};
export default Form;

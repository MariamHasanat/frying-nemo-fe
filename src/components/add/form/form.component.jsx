import { useState } from 'react';
import Input from '../../common/input/input';

import './form.css';
const Form =(props)=>{
const[name,setname]=useState('Sajeda');
/**
 * 
 * @param {React.FormEvent<HTMLFormElement>} e 
 */
  const handleSubmit=(e)=>{
    e.preventDefult();
  };
  const onNameChange = (e)=>{
    let value  = e .target.value;
    if( value.includes('.')){
      alert('Wrong input');
      value.replace('.','');
    }
    if(/find/ig.test(value)){
      value = value.replace(/find/ig, 'fry');
    }
    // if(value.lenght>=20){
    //   value = value.substr(0,18);
    // }
    setname(value);
  }
return(
  <form className='form' onSubmit={handleSubmit}>
    <div className='input'>
      <Input
      label ='name'
      value={name}
      onChange={onNameChange}
      />

   </div>
    <button  className='submit' type='submit' >Sign in</button>
  </form>
)
};
export default Form;
